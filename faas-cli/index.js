"use strict"

const {spawn} = require('child_process');
const listeners = require('../spawn-listener');
const promisify = require('../promisify-spawn');

class FaasCli {
    constructor(cli) {
        this.cli = cli;
    }

    build(name) {

        const child = spawn('faas-cli', ['build', '-f', './serverless.yml']);
    
        let promise = promisify(child)
            .then(() => resolve(name))
            .catch(err => reject(err));
    
        listeners(child);
    
        return child;
    }
}

module.exports = {
    "build": build
};
