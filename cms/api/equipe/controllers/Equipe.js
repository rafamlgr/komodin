'use strict';

/**
 * Equipe.js controller
 *
 * @description: A set of functions called "actions" for managing `Equipe`.
 */

module.exports = {

  /**
   * Retrieve equipe records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.equipe.search(ctx.query);
    } else {
      return strapi.services.equipe.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a equipe record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.equipe.fetch(ctx.params);
  },

  /**
   * Count equipe records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.equipe.count(ctx.query);
  },

  /**
   * Create a/an equipe record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.equipe.add(ctx.request.body);
  },

  /**
   * Update a/an equipe record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.equipe.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an equipe record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.equipe.remove(ctx.params);
  }
};
