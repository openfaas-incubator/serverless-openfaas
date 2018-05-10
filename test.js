// Copyright (c) OpenFaaS Authors 2017. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';
const expect = require('chai').expect;

describe('OpenFaaS provider', () => {
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
