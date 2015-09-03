# Personal Website

[![Build Status](https://travis-ci.org/tonikarttunen/tonikarttunen-com.svg)](https://travis-ci.org/tonikarttunen/tonikarttunen-com)
[![Dependency Status](https://david-dm.org/tonikarttunen/tonikarttunen-com.svg)](https://david-dm.org/tonikarttunen/tonikarttunen-com)

This repository contains the source code of the [tonikarttunen.com](http://www.tonikarttunen.com) web application. It is a modern single-page-application that is written in [React](https://facebook.github.io/react/) and [EcmaScript 2015 (ES6)](https://babeljs.io/docs/learn-es2015/). The project is based on [react-starter-kit](https://github.com/kriasoft/react-starter-kit/).

### Directory Layout

```
.
├── /build/                     # The folder for compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /api/                   # Mock API
│   ├── /components/            # React components
│   ├── /constants/             # Constants (action types etc.)
│   ├── /decorators/            # Higher-order React components
│   ├── /dispatcher/            # Singleton Flux dispatcher
│   ├── /public/                # Static files which are copied into the /build/public folder
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /templates/             # HTML templates for server-side rendering, emails etc.
│   ├── /utilities/             # Utility classes and functions
│   ├── /app.js                 # Client-side startup script
│   └── /server.js              # Server-side startup script
│── gulpfile.babel.js           # Configuration file for automated builds
│── package.json                # The list of 3rd party libraries and utilities
│── preprocessor.js             # ES6 transpiler settings for Jest
└── webpack.config.js           # Webpack configuration for bundling and optimization
```

### Getting Started

First, install [Node.js](https://nodejs.org) and [Git](https://git-scm.com/downloads) if you have not already installed them.
Then, you can clone the repository and install all the required dependencies with the following commands:

```shell
$ git clone git@github.com:tonikarttunen/tonikarttunen-com.git
$ cd tonikarttunen-com
$ npm install -g gulp           # Install Gulp task runner globally
$ npm install -g bower          # Install Bower package manager globally
$ npm install http-server -g    # Install a HTTP server for serving static files (for deveopment)
$ bower install                 # Install Bower modules
$ npm install                   # Install Node.js components listed in ./package.json
```

### How to Build

```shell
$ gulp build                    # or, `gulp build --release`
```

By default, it builds in debug mode. If you need to build in release mode, add
`--release` flag.

### How to Run

**_Note to self:_** If you are intending to run the development server locally,
you'll need to run a static file server at port 8888 with CORS enabled:  
`http-server -p 8888 --cors`.

```shell
$ gulp                          # or, `gulp --release`
```

This will start a lightweight development server with LiveReload and
synchronized browsing across multiple devices and browsers.

### How to Test

Run unit tests powered by [Jest](https://facebook.github.io/jest/) with the following
[npm](https://www.npmjs.org/doc/misc/npm-scripts.html) command:

```shell
$ npm test
```

Test any javascript module by creating a `__tests__/` directory where
the file is. Name the test by appending `-test.js` to the js file.
[Jest](https://facebook.github.io/jest/) will do the rest.

### Copyright and License

* `react-starter-kit` source code is licensed under the MIT License (MIT). See [LICENSE.txt](./LICENSE.txt)
file in the project root.
* All the other code in this repository: Copyright (C) 2015 Toni Karttunen. All rights reserved.
* All the images and other artwork in this repository: Copyright (C) 2015 Toni Karttunen. All rights reserved.
* Documentation to the project is licensed under the
[CC BY 4.0](http://creativecommons.org/licenses/by/4.0/) license.
