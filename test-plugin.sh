#!/bin/bash

# clear out previous driver / test-run
rm -rf driver
npm i
npm link serverless-openfaas

mkdir -p driver/
cd driver

# Install Node.js driver/template
serverless install --url \
  https://github.com/openfaas/serverless-openfaas-nodejs \
  --name openfaas-hello-world

# Alternatively:
# https://github.com/horike37/serverless-openfaas-template \

#For K8s
# sed -ie s/8080/31112/g openfaas-hello-world/serverless.yml

cd openfaas-hello-world

# Run the workflow

export SLS_DEBUG=""

echo package
serverless package
echo package done
serverless deploy

SLS_DEBUG=""
echo "Sleep for 10"
sleep 10

serverless invoke -f hello-world

serverless deploy function -f hello-world

sleep 10

serverless deploy list

serverless invoke -f hello-world

# Comment out to leave in place.
serverless remove

# cd .. && rm -rf driver/openfaas-hello-world

