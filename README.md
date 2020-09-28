
## Description

ts(TypeOrm,NestJS)で書いてるtime-usの仮環境でのapiです．.sampleの拡張子を外してから環境に合わせて設定してください．

## Installation

```bash
$ docker-compose run api npm install
```

## Running the app

```bash
# development
$ docker-compose run api npm run start

# watch mode
$ docker-compose run api npm run start:dev

# production mode
$ docker-compose run api npm run start:prod
```

## Test

```bash
# unit tests
$ docker-compose run api npm run test

# e2e tests
$ docker-compose run api npm run test:e2e

# test coverage
$ docker-compose run api npm run test:cov
```
