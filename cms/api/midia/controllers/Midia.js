'use strict';

/**
 * Midia.js controller
 *
 * @description: A set of functions called "actions" for managing `Midia`.
 */

module.exports = {

  /**
   * Retrieve midia records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.midia.search(ctx.query);
    } else {
      return strapi.services.midia.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a midia record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.midia.fetch(ctx.params);
  },

  /**
   * Count midia records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.midia.count(ctx.query);
  },

  /**
   * Create a/an midia record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.midia.add(ctx.request.body);
  },

  /**
   * Update a/an midia record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.midia.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an midia record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.midia.remove(ctx.params);
  }
};
