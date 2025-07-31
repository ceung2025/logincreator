const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 's2zjeu',
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.spec.js',
  },
})
