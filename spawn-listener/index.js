// Copyright (c) OpenFaaS Authors 2017. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

const spawnListener = spawn => {
	spawn.stdout.on('data', data => console.log(data.toString('utf8')));
	spawn.stderr.on('data', data => console.log(data.toString('utf8')));
	spawn.on('close', data => console.log(`faas-cli exited with code: ${data}`));
};

module.exports = spawnListener;
