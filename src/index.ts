export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Set up public permissions for all content types
    const publicRole = await strapi
      .query("plugin::users-permissions.role")
      .findOne({ where: { type: "public" } });

    if (publicRole) {
      // Grant find permissions to all content types
      const contentTypes = [
        "protest",
        "agenda",
        "update",
        "resource",
        "safety",
        "press-release",
      ];

      for (const contentType of contentTypes) {
        await strapi
          .query("plugin::users-permissions.permission")
          .create({
            data: {
              action: `api::${contentType}.${contentType}.find`,
              subject: `api::${contentType}.${contentType}`,
              properties: {},
              conditions: [],
              role: publicRole.id,
            },
          })
          .catch(() => {
            // Permission might already exist, ignore error
          });

        await strapi
          .query("plugin::users-permissions.permission")
          .create({
            data: {
              action: `api::${contentType}.${contentType}.findOne`,
              subject: `api::${contentType}.${contentType}`,
              properties: {},
              conditions: [],
              role: publicRole.id,
            },
          })
          .catch(() => {
            // Permission might already exist, ignore error
          });
      }
    }
  },
};
