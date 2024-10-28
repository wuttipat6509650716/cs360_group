'use strict';

/**
 * `isOwner` middleware
 */

module.exports = (config, { strapi }) => {
  
  return async (ctx, next) => {
    try {
      const user = ctx.state.user;
      var entryId = await ctx.params.id ? ctx.params.id : undefined;
      let entry = {};
      
      if (!user)
        return ctx.unauthorized("User authentication is required.");

      if (!entryId) {
        return ctx.badRequest("Profild ID is required.")
      }

      if(!(!isNaN(entryId) && !isNaN(parseFloat(entryId))))
        return ctx.badRequest("ID must be digit only")
      
      entry = await strapi.entityService.findOne(
        'api::profile.profile',
        entryId,
        { populate: "*" }
      );

      if (!entry) 
        return ctx.notFound("Profile not found.");
      
      
      if (user.id !== entry.user.id) {
        return ctx.unauthorized("This action is unauthorized.");
      } else {
        return next();
      }

    } catch (error) {
      strapi.log.error(error);
      return ctx.internalServerError("An error occurred.");
    }
  };
};
