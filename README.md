This is an OpenFaaS plugin for the Serverless Inc framework.

# Were you looking for OpenFaaS?

You are probably looking for [OpenFaaS - openfaas/faas](https://github.com/openfaas/faas).

# serverless-openfaas

Status: This plugin for the Serverless Inc Framework is under development - help is wanted.

Work remaining:

* [ ] Documentation on using OpenFaaS with the Serverless Inc framework
* [ ] Validation of plugin from Serverless Inc team
* [ ] Validation of [node.js template](https://github.com/openfaas/serverless-openfaas-nodejs) from Serverless Inc team
* [ ] Breaking out of SDK for spawning `faas-cli`

## Pre-reqs

* [Node.js 8 or newer](https://nodejs.org/en/download/)
* Serverless Inc CLI (sls)
* Docker 17.05+
* OpenFaaS & CLI (faas-cli)

Installation:

* Serverless Inc CLI (sls)

```
sudo npm i -g serverless
```

* Get the OpenFaaS CLI:

```
$ curl -sSL https://cli.openfaas.com | sudo sh
```

Or install via `brew install faas-cli`.

* Get OpenFaaS

You can deploy OpenFaaS locally or remotely with Docker Swarm or Kubernetes. [See the documentation](https://docs.openfaas.com/)

## Getting started

* Get this plugin

```
$ git clone https://github.com/openfaas/serverless-openfaas
$ ./prep.sh
```

> This will install the `serverless` npm module.

* Test all commands with a script

```
$ ./test-plugin.sh
```

* Manually test commands

Run `./test-plugin.sh` then:
```
$ cd driver/faas-func
$ sls <command>
```

## Supported commands

```
sls package
sls deploy
sls deploy function -f <your-function>
sls deploy list
sls invoke -f <your-function> -d <your-data> # -d flag optional
sls remove
```
