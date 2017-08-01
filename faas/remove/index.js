'use strict';

const _ = require('lodash');
const BbPromise = require('bluebird');

class FaaSRemove {
    constructor(serverless, options) {
        this.serverless = serverless;
        this.options = options || {};
        this.provider = this.serverless.getProvider('faas');

        this.hooks = {
            "remove:remove": () => BbPromise.bind(this).then(this.removeFunction)
        };

        this.serverless.cli.log("Configuring FaaS Remove plugin");    
    }

    removeFunction() {
        return new BbPromise((resolve, reject) => {
            _.each(this.serverless.service.functions, (description, name) => {
                this.serverless.cli.log("Attempting to remove " + name);
            });

            resolve();
        });
    }
}

module.exports = FaaSRemove;