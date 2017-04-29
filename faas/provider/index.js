"use strict"

const BbPromise = require('bluebird');

const constants = {
  "providerName": "faas"
};

class FaaSProvider {
  constructor(serverless) {
    this.serverless = serverless;
    this.provider = this;
    this.serverless.setProvider(constants.providerName, this);
  }

  static getProviderName() {
    return constants.providerName;
  }

  request() {
    console.log("Invoked with arguments: " + Object.keys(arguments));
    return new BbPromise((resolve, reject) => {
        let response = {status: "ok"};
        resolve(response);
    });
  }

}

module.exports = FaaSProvider;
