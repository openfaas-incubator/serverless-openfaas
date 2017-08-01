#!/bin/bash

rm -rf driver
mkdir driver

cp -r node_modules driver/
cp -r faas driver/node_modules/serverless-faas
cp serverless.yml driver/
cp handler.js driver/
cp package.json driver/

cd driver/

SLS_DEBUG=* serverless $1 $2 $3 $4 $5
SLS_DEBUG=* serverless deploy
echo "deployed"
SLS_DEBUG=* serverless invoke -f hello -l
echo "Hello invoked"

SLS_DEBUG=* serverless remove
echo "removed"
