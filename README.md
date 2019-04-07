# Were you looking for OpenFaaS?

You are probably looking for [OpenFaaS - openfaas/faas](https://github.com/openfaas/faas).

# Status

This is a plugin for the "serverless" JavaScript framework by Serverless Inc. At the time of the last commit it was operational.

At time of writing the OpenFaaS CLI has between 500-600 commits and is written entirely in Go. Go is a fast and efficient language for building CLIs and allows code re-use between the CLI and other components in the project.

Despite the claim of portability between frameworks or clouds the maintainers feel there is a weak argument for rewriting all this code, knowledge and bug fixes in JavaScript. The OpenFaaS CLI is capable of building the immutable Docker images required for OpenFaaS and working with the OpenFaaS API and existing developer workflow.

The OpenFaaS Go CLI is portable between all private/public and private clouds without the need for JavaScript or any third-parties.

If you landed on this page, use the [openfaas/faas-cli](https://github.com/openfaas/faas-cli] written in Go which is:

* Actively developed with a roadmap
* Supported by community and maintainers
* Fast and written in Go
* Available via `curl` and `brew` for MacOS, Linux and Windows
* Portable between clouds since OpenFaaS uses Kubernetes/Swarm/Nomad/Fargate as a provider.

# serverless-openfaas

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

> Note: until 0.6.9 of the CLI is released you will need to rebuild it from source. `git clone https://github.com/openfaas/faas-cli` and `cd faas-cli && ./build_redist.sh`

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
```

Link the plugin so it's available to Node:

```
$ ./prep.sh
```

* Test the happy-path: build/deploy/list/invoke/remove

```
$ ./test-plugin.sh
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

## Contributing

Help is wanted. Please see the [contributing guide](./CONTRIBUTING.md)
