"use strict"

const BbPromise = require('bluebird');

class FaaSProvider {
  constructor(serverless, options) {
    this.serverless=serverless;
    this.options=options;
    this.provider = provider;

    this.serverless.setProvider(getProviderName(), this);
  }

  static getProviderName() {
    return "FaaS"
  }

  request() {
    console.log("Invoked with arguments: " + Object.keys(arguments));

  }

}

module.exports = FaaSProvider;