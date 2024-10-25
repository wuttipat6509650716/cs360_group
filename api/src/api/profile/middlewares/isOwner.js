'use strict';

/**
 * `isOwner` middleware
 */

module.exports = (config, { strapi }) => {
  
  return async (ctx, next) => {
    const user = ctx.state.user;
    const entryId = await ctx.params.id ? ctx.params.id : undefined;
    let entry = {};
    
    if(!(!isNaN(entryId) && !isNaN(parseFloat(entryId)))){
      return ctx.badRequest("ID must be digit only")
    }

    if (entryId) {
      entry = await strapi.entityService.findOne(
        'api::profile.profile',
        entryId,
        { populate: "*" }
      );
    }

    if (user.id !== entry.user.id) {
      return ctx.unauthorized("This action is unauthorized.");
    } else {
      return next();
    }
  };
};
