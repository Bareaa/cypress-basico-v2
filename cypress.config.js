const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 375,
  viewportHeight: 667,
  e2e: {
    // Configurações específicas do ambiente de testes
  },
});
