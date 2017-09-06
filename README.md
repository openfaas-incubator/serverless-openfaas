# serverless-faas
A provider plugin for the Serverless Inc framework (work-in-progress)


### Testing Instructions

#### Prereq's

NodeJS 6 or higher

Docker 1.13 or higher

faas-cli
```
$ curl -sSL https://cli.openfaas.com | sudo sh
```

#### Prep the environment

###### Get the plugin
```
$ git clone https://github.com/austinfrey/serverless-faas
$ cd serverless-faas
$ npm install
$ git checkout forked_cmds
```

###### Test all commands with a script
```
$ ./test-plugin.sh
```

###### Manually test commands
Run `./test-plugin.sh` then:
```
$ cd driver/faas-func
$ sls <command>
```

###### Currently supported commands
```
sls init
sls package
sls deploy
sls deploy function -f <your-function>
sls deploy list
sls invoke -f <your-function> -d <your-data> # -d flag optional
sls remove
```

