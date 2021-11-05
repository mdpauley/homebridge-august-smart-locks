const settings = require("./settings");
const platform = require("./platform");

module.exports = function (api) {
  api.registerPlatform(settings.PLUGIN_NAME, settings.PLATFORM_NAME, platform.AugustDummyGarage);
};
