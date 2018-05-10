// Copyright (c) OpenFaaS Authors 2017. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

const BbPromise = require('bluebird');

const promisify = spawn => {
	return new BbPromise((resolve, reject) => {
		spawn.addListener('error', reject);
		spawn.addListener('exit', resolve);
	});
};

module.exports = promisify;
