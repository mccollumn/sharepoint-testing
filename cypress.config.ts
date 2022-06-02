// import { defineConfig } from 'cypress'
const { defineConfig } = require("cypress");

// export default defineConfig({
module.exports = defineConfig({
  viewportWidth: 1200,
  viewportHeight: 1000,
  env: {
    username: 'mccollumn@webtrendsdev.onmicrosoft.com',
    password: 'Grotto10',
  },
  defaultCommandTimeout: 10000,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/reports/junit-[hash].xml',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
