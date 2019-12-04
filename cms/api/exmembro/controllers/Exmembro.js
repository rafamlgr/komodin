'use strict';

/**
 * Exmembro.js controller
 *
 * @description: A set of functions called "actions" for managing `Exmembro`.
 */

module.exports = {

  /**
   * Retrieve exmembro records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.exmembro.search(ctx.query);
    } else {
      return strapi.services.exmembro.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a exmembro record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.exmembro.fetch(ctx.params);
  },

  /**
   * Count exmembro records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.exmembro.count(ctx.query);
  },

  /**
   * Create a/an exmembro record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.exmembro.add(ctx.request.body);
  },

  /**
   * Update a/an exmembro record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.exmembro.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an exmembro record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.exmembro.remove(ctx.params);
  }
};
