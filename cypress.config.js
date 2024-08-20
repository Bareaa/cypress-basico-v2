const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 375,
  viewportHeight: 667,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000', // ou outro valor adequado
  },
});
