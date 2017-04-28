"use strict"
const expect = require('chai').expect;

describe("FaaS provider", () => {
    let FaaS = require("./faas");

    it("creates a new instance", ()=> {
        let serverless = { pluginManager: { setProvider:()=>{}, addPlugin: function(){} } } ;
        let opts = {};
        let faas = new FaaS(serverless, opts);
        expect(faas).to.exist;
        expect(faas.serverless).to.exist;
        
    })
});



