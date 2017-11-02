'use strict';
const expect = require('chai').expect;

describe('FaaS provider', () => {
    const OpenFaaS = require('./lib');

    it('creates a new instance', () => {
        const serverless = {
            pluginManager: {
                setProvider: () => {},
                addPlugin() {}
            },
            cli: {
                log: console.log
            }
        };
        const opts = {};
        const openFaaS = new OpenFaaS(serverless, opts);
        expect(openFaaS).to.exist;
        expect(openFaaS.serverless).to.exist;
    });
});
