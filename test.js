'use strict';
const expect = require('chai').expect;

describe('FaaS provider', () => {
	const FaaS = require('./faas');

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
		const faas = new FaaS(serverless, opts);
		expect(faas).to.exist;
		expect(faas.serverless).to.exist;
	});
});

