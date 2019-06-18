const baseConfig = require('kcd-scripts/jest')

module.exports = {
  projects: [{
    ...baseConfig,
    displayName: 'browser',
    browser: true,
    testEnvironment: 'jest-environment-jsdom',
    resolver: 'enhanced-resolve-jest'
  }, {
    ...baseConfig,
    displayName: 'server',
    testEnvironment: 'node',
    testMatch: ['./**/element-queries.js'] // only run a subset of tests for server side
  }]
}
