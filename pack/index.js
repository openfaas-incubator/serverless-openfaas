// Copyright (c) OpenFaaS Authors 2017. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

const _ = require('lodash');
const BbPromise = require('bluebird');
const FaasCli = require("../faas-cli");

class OpenFaasPackage {
	constructor(serverless, options) {
		this.serverless = serverless;
		this.options = options || {};
		this.provider = this.serverless.getProvider('openfaas');
		this.commands = {
			package: {
				lifecycleEvents: [
					'package'
				],
				usage: 'Bundle function for deployment on OpenFaaS'
			}
		};
		this.serverless.cli.log('Loading OpenFaasPackage');

		this.hooks = {
			'before:package:createDeploymentArtifacts': () => BbPromise.bind(this)
			.then(this.packageFunction),
		};
	}

	packageFunction() {
		return new BbPromise(resolve => {

			this.serverless.cli.log('Running packageFunction');

			let cli = new FaasCli(this.serverless.cli);

			_.each(this.serverless.service.functions, (description, name) => {
				this.serverless.cli.log('Attempting to package ' + name);

				cli.build(name)
					.then((res) => this.serverless.cli.log(`Function ${name} has been packaged`))
					.then(() => resolve())
					.catch(err => this.serverless.cli.log(err));
			});
		});
	}
}

module.exports = OpenFaasPackage;
