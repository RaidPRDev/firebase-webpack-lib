# firebase-webpack-lib
We are using webpack to bundle out Firebase library. Bundles specific modules into a single library file.  This enables us to make the smallest possible library without having any modules that are not being used. 

## Prerequisites

#### Node.js
Before you can start, you need to have Node.js 8.0.0 or greater installed on your machine.
To download Node.js visit https://nodejs.org/en/download/.

## Build Instructions

install webpack and dependencies
> npm install

edit the index file to add/remove modules you want in the library
> index.js

compile
> npm run build

output lib
> dist/firebase.js

