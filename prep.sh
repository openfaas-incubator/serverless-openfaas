#!/bin/sh

echo "Installing SLS CLI"
npm i -g serverless

echo "Enabling faas provider"

sed -ie s/google/faas/g /usr/local/lib/node_modules/serverless/lib/classes/Service.js

