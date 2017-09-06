'use strict';

const Faas = require('./faas');

console.log(new Faas({pluginManager: {setProvider: () => {}, addPlugin() {}}}, {}));

