'use strict';

/**
 * Dica.js controller
 *
 * @description: A set of functions called "actions" for managing `Dica`.
 */

module.exports = {

  /**
   * Retrieve dica records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.dica.search(ctx.query);
    } else {
      return strapi.services.dica.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a dica record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.dica.fetch(ctx.params);
  },

  /**
   * Count dica records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.dica.count(ctx.query);
  },

  /**
   * Create a/an dica record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.dica.add(ctx.request.body);
  },

  /**
   * Update a/an dica record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.dica.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an dica record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.dica.remove(ctx.params);
  }
};
