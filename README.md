# Nest.js <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_nestjs_icon_130355.png" width="32px"> and MongoDB <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" width="32px"/> CRUD Web App with _soft_ delete and pagination 📜

## Stack 💻

<img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_nestjs_icon_130355.png" width="20px"/> [Nest.js](https://nestjs.com/) <br>
<img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" width="20px"/> [MongoDB](https://www.mongodb.com/) <br>
<img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_typescript_official_icon_130107.png" width="20px"/> [TypeScript](https://www.typescriptlang.org/)<br>

## Requirements:

### Install node modules ⚙️

```
npm install
```

MongoDB URL 🍃<br>
In _**./config/config.ts**_ file, fill MONGO_URL value with your MongoDB url.

## Routes 🛣️<br>

- /api-docs [GET]:<br>
  **Description**: Swagger UI

- /api/v1/employees [GET]:<br>
  **Description**: Get all employees that are not deleted [deleted: false] <br>
  **Accepted Queries**: page, limit

- /api/v1/employees/:id [GET]: <br>
  **Description**: Get employee by id that is not deleted [deleted: false]<br>
  **Required params**: id

- /api/v1/employees/deleted-employees [GET]:<br>
  **Description**: Get employees that are deleted [deleted:true]<br>

- /api/v1/employees [POST]:<br>
  **Description**: Create employee<br>
  **Required fields**: name, email, phoneNumber, homeAddress: {city, zipCode, addressLine1, addressLine2 [optional]}, dateOfEmployment, dateOfBirth

- /api/v1/employees/:id [PUT]:<br>
  **Description**: Update employee that is not deleted [deleted:false]<br>
  **Required params**: id and property to update

- /api/v1/employees/:id [DELETE]:<br>
  **Description**: Delete employee<br>
  **Required params**: id

<br>
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
