# Server

The server will have two end-points, a POST method for uploading files and a GET method for testing the connection.

## Packages Used

- **[cors](https://www.npmjs.com/package/cors)** for enabeling [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

- **[formidable](https://www.npmjs.com/package/formidable)** which parses form data. We will use it for parsing `multipart/form-data`.

- **[express](https://www.npmjs.com/package/express)** for implementing the server.

## Create the Project

```
mkdir formidable-react-dropzone-ex
cd formidable-react-dropzone-ex
mkdir server
cd server
npm init -y
```

There are quit a few packages to install. Let's take a shortcut and edit the `package.json` file. Replace the contents of your package.json file with the below.

```json
{
  "name": "try-formidable-w-express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon --trace-warnings --exec babel-node src/index.js"
  },
  "keywords": [],
  "author": "klequis",
  "license": "MIT",
  "dependencies": {
    "@babel/cli": "^7.12.17",
    "@babel/core": "^7.12.17",
    "@babel/node": "^7.12.17",
    "@babel/plugin-transform-runtime": "^7.12.17",
    "@babel/preset-env": "^7.12.17",
    "@babel/register": "^7.12.13",
    "@babel/runtime": "^7.12.18",
    "@babel/types": "^7.12.17",
    "@types/cors": "^2.8.10",
    "@types/express": "^4.17.11",
    "@types/node": "^14.14.29",
    "babel-eslint": "^10.1.0",
    "babel-plugin-istanbul": "^6.0.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "fs-extra": "^9.1.0",
    "nodemon": "^2.0.7",
    "ramda": "^0.27.1"
  }
}
```

Then install the packages

```
npm install
```

While stil in /server

```
mkdir src
cd src
touch index.js wrapAsync.js
mkdir uploads
```
