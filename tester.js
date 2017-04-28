"use strict"

let faas = require("./faas");

console.log(new faas({pluginManager: { setProvider:()=>{}, addPlugin: function(){} } },{}));


