#!/bin/bash

rm -rf driver
mkdir -p driver/node_modules/
cp -r faas driver/node_modules/serverless-faas
cp serverless.yml driver/
cp handler.js driver/
cp package.json driver/

cd driver/
SLS_DEBUG=* serverless $1 $2 $3 $4 $5
