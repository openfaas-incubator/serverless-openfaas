'use strict';

const _ = require('lodash');
const BbPromise = require('bluebird');

class FaaSInvoke {
    constructor(serverless, options) {
        this.serverless = serverless;
        this.options = options || {};
        this.provider = this.serverless.getProvider('faas');

        this.hooks = {
            "invoke:invoke": () => BbPromise.bind(this).then(this.invokeFunction)
        };

        this.serverless.cli.log("Configuring FaaS Invoke plugin");
    }

    invokeFunction() {
        return new BbPromise((resolve, reject) => {
            _.each(this.serverless.service.functions, (description, name) => {
                this.serverless.cli.log("Attempting to invoke " + name);
            });

            resolve();
        });
    }
}

module.exports = FaaSInvoke;