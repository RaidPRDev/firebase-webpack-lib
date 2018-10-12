# firebase-webpack-lib
Bundles specific modules into a single library file.  This enables us to make the smallest possible library without having any modules that are not being used.

## Prerequisites

#### Node.js
Before you can start, you need to have Node.js 8.0.0 or greater installed on your machine.

#### Webpack
You will also need webpack installed

## Build Instructions

install dependencies
> npm install

add/remove modules you want in the library
> index.js

compile
> npm run build

output lib
> dist/firebase.js

