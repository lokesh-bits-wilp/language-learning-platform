# Language Learning Platform Backend Service

## Overview

The service helps to interact with the language learning platform backend layer for the **Language Learning Platform**.

**API docs (swagger):** http://localhost:4000/language-backend/api-docs/

## Table of Contents ##

1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)

### Prerequisites

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

Please ensure to create and update .env file before running the application. We can refer .env.sample file in order to
create one from it. Below are the environment variables:

- ```NODE_ENV``` Default value is "**development**" | Required to fill.
- ```PORT``` Default **4000** | Required | This determines the port where the application will be server. On local it will serve as http://localhost:4000
- ```BASE_URL``` Default value is "**/language-backend**" | Required | This determines all the endpoints will be prefixed with this path e.g. http://localhost:4000/language-backend/api-docs/
- ```SWAGGER_DOCS_ENABLED``` Default value is "**false**" | Optional | This determines whether to allow swagger docs on the server or not. **"false"** value will prevent API docs on location http://localhost:4003/poll-api/api-docs/
- ```JWT_SECRET``` Required | A long string is required that will be used to sign and verify authentication tokens.
- ```JWT_EXPIRATION``` Required | A time in minutes, days or hours by when the authentication tokens will be expired. e.g. 15m, 1h, 2d would mean 15 minutes, 1 hour and 2 days respectively.

For development, you will only need Node.js and a node global package, installed in your environment.

#### NodeJS Runtime

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find
  git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install Node.js and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and
  the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v18.8.0

    $ npm --version
    8.18.0

## Getting Started

Once here, please run below commands to ensure we get all the required Node.js package installed for the service:

```
$ npm install
```

Once the installation is done, please run below command to start the application locally on port **4003** (by default):

```
$ npm start
```

To ensure everything is running please open a web browser and locate to http://localhost:4000/language-backend/api-docs/ that should open the swagger documentation for this service.

Our entire project use **Typescript** code that needs to be compiled to Javascript before deployment, therefore we can
use below command to prepare te build at the "/dist" directory:

```
$ npm run build
```

There are plenty of other commands as well in the package.json file to help out day-to-day development tasks.
