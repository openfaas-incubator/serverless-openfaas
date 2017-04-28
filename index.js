"use strict"

let faas = require("./FaaSProvider");

console.log(new faas({pluginManager: { setProvider:()=>{}, addPlugin: function(){} } },{}));


