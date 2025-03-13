const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {

      on('task', {
        getDashboardUrl() {
          return 'http://localhost:5174'; // Dashboard URL
        }
      });
    }
  }
});
