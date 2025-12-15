const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportPageTItle: "Report automation testing",
    reportDir: "cypress/reports/mochawesome",
    overwrite: true,
    html: true,
    json: true,
    charts: true,
    timestamp: "yyyy-mm-dd_HH-MM-ss",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl: "https://portal.desa.id/sandbox/user/sign-in",
  },
});
