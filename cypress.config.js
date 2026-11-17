const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.amazon.es",
    watchForFileChanges:false,
    env: {
      "URL_DEV": "https://development.app.com",
      "VAR_ENV_CYPRESS_CONFIG_1": "SOY VAR ENV DE CYPRESS CONFIG",
      "VAR_ENV_CYPRESS_CONFIG_2": "SOY VAR ENV DE CYPRESS CONFIG"
    }
  },
});
