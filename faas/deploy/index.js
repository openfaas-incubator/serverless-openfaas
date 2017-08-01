'use strict';

const _ = require('lodash');
const BbPromise = require('bluebird');

class FaaSDeploy {
    constructor(serverless, options) {
        this.serverless = serverless;
        this.options = options || {};
        this.provider = this.serverless.getProvider('faas');

        this.hooks = {
            "deploy:deploy": () => BbPromise.bind(this).then(this.deployFunction)
        };

        this.serverless.cli.log("Configuring FaaS Deploy plugin");    
    }

    deployFunction() {
        this.serverless.cli.log("Attempting to deploy");

        return new BbPromise((resolve, reject) => {
            _.each(this.serverless.service.functions, (description, name) => {
                this.serverless.cli.log("Attempting to deploy " + name);
            });

            resolve();
        });
    }
}

module.exports = FaaSDeploy;