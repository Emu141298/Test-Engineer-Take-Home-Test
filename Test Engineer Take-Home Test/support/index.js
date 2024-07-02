const { addMochaContext, initPlugin } = require('cypress-mochawesome-reporter/plugin');

module.exports = (on, config) => {
  initPlugin(on, config);
  // Add any additional plugins or configurations here.
  return config;
};