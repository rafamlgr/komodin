'use strict';

/**
 * Membro.js controller
 *
 * @description: A set of functions called "actions" for managing `Membro`.
 */

module.exports = {

  /**
   * Retrieve membro records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.membro.search(ctx.query);
    } else {
      return strapi.services.membro.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a membro record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.membro.fetch(ctx.params);
  },

  /**
   * Count membro records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.membro.count(ctx.query);
  },

  /**
   * Create a/an membro record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.membro.add(ctx.request.body);
  },

  /**
   * Update a/an membro record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.membro.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an membro record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.membro.remove(ctx.params);
  }
};
