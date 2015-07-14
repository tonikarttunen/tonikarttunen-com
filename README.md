# Personal Website

[![Build Status](https://travis-ci.org/tonikarttunen/tonikarttunen-com.svg?branch=develop)](https://travis-ci.org/tonikarttunen/tonikarttunen-com)
[![Dependency Status](https://david-dm.org/tonikarttunen/tonikarttunen-com.svg)](https://david-dm.org/tonikarttunen/tonikarttunen-com)

This repository contains an upcoming redesign of [http://www.tonikarttunen.com](http://www.tonikarttunen.com). It is a modern single-page-application that is written in [React](https://facebook.github.io/react/), [Flux](http://facebook.github.io/flux/) and [EcmaScript 2015 (ES6)](https://babeljs.io/docs/learn-es2015/). The project is based on [react-starter-kit](https://github.com/kriasoft/react-starter-kit/).


### Documentation

 **TODO**

### Directory Layout

```
.
├── /build/                     # The folder for compiled output
├── /docs/                      # Documentation files for the project
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /api/                   # REST API / Relay endpoints
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /components/            # React components
│   ├── /constants/             # Constants (action types etc.)
│   ├── /content/               # Static content (plain HTML or Markdown, Jade, you name it)
│   ├── /core/                  # Core components (Flux dispatcher, base classes, utilities)
│   ├── /decorators/            # Higher-order React components
│   ├── /public/                # Static files which are copied into the /build/public folder
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /templates/             # HTML templates for server-side rendering, emails etc.
│   ├── /utils/                 # Utility classes and functions
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

```shell
$ gulp                          # or, `gulp --release`
```

This will start a lightweight development server with LiveReload and
synchronized browsing across multiple devices and browsers.

### How to Deploy

```shell
$ gulp build --release          # Builds the project in release mode
$ gulp deploy                   # or, `gulp deploy --production`
```

For more information see `deploy` task in `gulpfile.js`.

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

* Source code is licensed under the MIT License (MIT). See [LICENSE.txt](./LICENSE.txt)
file in the project root.
* Documentation to the project is licensed under the
[CC BY 4.0](http://creativecommons.org/licenses/by/4.0/) license.
* React logo image is a trademark of Facebook, Inc.
* All the other images, videos and other artwork in this repository: (C) Copyright 2015 Toni Karttunen. All rights reserved. 
