'use strict';

/* global Exmembro */

/**
 * Exmembro.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');
const { convertRestQueryParams, buildQuery } = require('strapi-utils');

module.exports = {

  /**
   * Promise to fetch all exmembros.
   *
   * @return {Promise}
   */

  fetchAll: (params, populate) => {
    const filters = convertRestQueryParams(params);
    const populateOpt = populate || Exmembro.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)

    return buildQuery({
      model: Exmembro,
      filters,
      populate: populateOpt,
    });
  },

  /**
   * Promise to fetch a/an exmembro.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Exmembro.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    return Exmembro
      .findOne(_.pick(params, _.keys(Exmembro.schema.paths)))
      .populate(populate);
  },

  /**
   * Promise to count exmembros.
   *
   * @return {Promise}
   */

  count: (params) => {
    const filters = convertRestQueryParams(params);

    return buildQuery({
      model: Exmembro,
      filters: { where: filters.where },
    })
      .count()
  },

  /**
   * Promise to add a/an exmembro.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Exmembro.associations.map(ast => ast.alias));
    const data = _.omit(values, Exmembro.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Exmembro.create(data);

    // Create relational data and return the entry.
    return Exmembro.updateRelations({ _id: entry.id, values: relations });
  },

  /**
   * Promise to edit a/an exmembro.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Exmembro.associations.map(a => a.alias));
    const data = _.omit(values, Exmembro.associations.map(a => a.alias));

    // Update entry with no-relational data.
    const entry = await Exmembro.updateOne(params, data, { multi: true });

    // Update relational data and return the entry.
    return Exmembro.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an exmembro.
   *
   * @return {Promise}
   */

  remove: async params => {
    // Select field to populate.
    const populate = Exmembro.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    // Note: To get the full response of Mongo, use the `remove()` method
    // or add spent the parameter `{ passRawResult: true }` as second argument.
    const data = await Exmembro
      .findOneAndRemove(params, {})
      .populate(populate);

    if (!data) {
      return data;
    }

    await Promise.all(
      Exmembro.associations.map(async association => {
        if (!association.via || !data._id || association.dominant) {
          return true;
        }

        const search = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: data._id } : { [association.via]: { $in: [data._id] } };
        const update = _.endsWith(association.nature, 'One') || association.nature === 'oneToMany' ? { [association.via]: null } : { $pull: { [association.via]: data._id } };

        // Retrieve model.
        const model = association.plugin ?
          strapi.plugins[association.plugin].models[association.model || association.collection] :
          strapi.models[association.model || association.collection];

        return model.update(search, update, { multi: true });
      })
    );

    return data;
  },

  /**
   * Promise to search a/an exmembro.
   *
   * @return {Promise}
   */

  search: async (params) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams('exmembro', params);
    // Select field to populate.
    const populate = Exmembro.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias)
      .join(' ');

    const $or = Object.keys(Exmembro.attributes).reduce((acc, curr) => {
      switch (Exmembro.attributes[curr].type) {
        case 'integer':
        case 'float':
        case 'decimal':
          if (!_.isNaN(_.toNumber(params._q))) {
            return acc.concat({ [curr]: params._q });
          }

          return acc;
        case 'string':
        case 'text':
        case 'password':
          return acc.concat({ [curr]: { $regex: params._q, $options: 'i' } });
        case 'boolean':
          if (params._q === 'true' || params._q === 'false') {
            return acc.concat({ [curr]: params._q === 'true' });
          }

          return acc;
        default:
          return acc;
      }
    }, []);

    return Exmembro
      .find({ $or })
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(populate);
  }
};
