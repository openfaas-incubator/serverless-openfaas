'use strict';

const OpenFaaS = require('./faas');

let openFaaS = new OpenFaaS({ pluginManager: { setProvider: () => {}, addPlugin() {} } }, {})
console.log(openFaaS);