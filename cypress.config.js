const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.amazon.es",
    watchForFileChanges: false,

    // Ventana fija para que las capturas y los selectores sean consistentes
    viewportWidth: 1366,
    viewportHeight: 768,

    // Tiempo máximo que Cypress reintenta cada comando antes de fallar
    defaultCommandTimeout: 8000,

    // Reintenta tests fallidos solo en ejecución por consola (cypress run)
    retries: {
      runMode: 2,
      openMode: 0,
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});