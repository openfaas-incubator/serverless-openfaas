// Copyright (c) OpenFaaS Authors 2017. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

const OpenFaasProvider = require('./provider');
const OpenFaasDeploy = require('./deploy');
const OpenFaasRemove = require('./remove');
const OpenFaasInvoke = require('./invoke');
const OpenFaasPackage = require('./pack');

class OpenFaasIndex {
	constructor(serverless, options) {
		this.serverless = serverless;
		this.options = options;
		this.serverless.cli.log('Configuring OpenFaaS plugin(s)');

		this.serverless.pluginManager.addPlugin(OpenFaasProvider);
		this.serverless.pluginManager.addPlugin(OpenFaasDeploy);
		this.serverless.pluginManager.addPlugin(OpenFaasRemove);
		this.serverless.pluginManager.addPlugin(OpenFaasInvoke);
		this.serverless.pluginManager.addPlugin(OpenFaasPackage);
	}
}

module.exports = OpenFaasIndex;

