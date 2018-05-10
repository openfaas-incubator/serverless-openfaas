// Copyright (c) OpenFaaS Authors 2017. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

const constants = {
	providerName: 'openfaas'
};

class OpenFaasProvider {
	constructor(serverless) {
		this.serverless = serverless;
		this.provider = this;
		this.serverless.setProvider(constants.providerName, this);
	}

	static getProviderName() {
		return constants.providerName;
	}

}

module.exports = OpenFaasProvider;
