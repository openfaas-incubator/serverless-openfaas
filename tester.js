'use strict';

const OpenFaaS = require('./lib');

let openFaaS = new OpenFaaS({ pluginManager: { setProvider: () => {}, addPlugin() {} } }, {})
console.log(openFaaS);
