"use strict"

const FaasProvider = require("./provider")

class FaaSIndex {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.serverless.pluginManager.addPlugin(FaasProvider);
  }
}

module.exports = FaaSIndex;

