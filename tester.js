// Copyright (c) OpenFaaS Authors 2017. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

const OpenFaaS = require('./lib');

let openFaaS = new OpenFaaS(
    { pluginManager: {
         setProvider: () => {}, addPlugin() {} 
        } 
    }, {})
console.log(openFaaS);
