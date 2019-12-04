'use strict';

/**
 * Download.js controller
 *
 * @description: A set of functions called "actions" for managing `Download`.
 */

module.exports = {

  /**
   * Retrieve download records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.download.search(ctx.query);
    } else {
      return strapi.services.download.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a download record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.download.fetch(ctx.params);
  },

  /**
   * Count download records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.download.count(ctx.query);
  },

  /**
   * Create a/an download record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.download.add(ctx.request.body);
  },

  /**
   * Update a/an download record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.download.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an download record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.download.remove(ctx.params);
  }
};
