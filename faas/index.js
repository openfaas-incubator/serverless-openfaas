"use strict"

const FaasProvider = require("./provider")
const FaaSDeploy = require('./deploy');

class FaaSIndex {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;
    this.serverless.cli.log("Configuring FaaS plugins");

    this.serverless.pluginManager.addPlugin(FaasProvider);
    this.serverless.pluginManager.addPlugin(FaaSDeploy);
  }
}

module.exports = FaaSIndex;

