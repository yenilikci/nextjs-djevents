"use strict";

/**
 *  event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  // create event with linked user
  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      data.user = ctx.state.user.id;
      entity = await strapi.services.events.create(data, { files });
    } else {
      ctx.request.body.author = ctx.state.user.id;
      entity = await strapi.services.events.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.events });
  },

  // update user event
  async update(ctx) {
    const { id } = ctx.params;

    let entity;

    const [events] = await strapi.services.events.find({
      id: ctx.params.id,
      "user.id": ctx.state.user.id,
    });

    if (!events) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.events.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.events.update({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.events });
  },
  // Delete a user event
  async delete(ctx) {
    const { id } = ctx.params;

    const [events] = await strapi.services.events.find({
      id: ctx.params.id,
      "user.id": ctx.state.user.id,
    });

    if (!events) {
      return ctx.unauthorized(`You can't delete this entry`);
    }

    const entity = await strapi.services.events.delete({ id });
    return sanitizeEntity(entity, { model: strapi.models.events });
  },

  // get logged in users
  async me(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest(null, [
        { message: "No authorization header was found" },
      ]);
    }

    const data = await strapi.db.query("api::event.event").findMany({
      where: {
        user: { id: user.id },
      },
      populate: { user: true, image: true },
    });
    if (!data) {
      return ctx.notFound();
    }

    const res = await this.sanitizeOutput(data, ctx);
    return res;
  },
}));
