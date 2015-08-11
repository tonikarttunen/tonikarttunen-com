// server.js

import 'babel/polyfill';
import _ from 'underscore';
import fs from 'fs';
import path from 'path';
import express from 'express';
import { staticPath } from './utilities/static/StaticPath';

const server = express();

const DEVELOPMENT = process.env.NODE_ENV !== 'production';
if (DEVELOPMENT === true) {
  server.set('port', (process.env.PORT || 5000));
} else {
  server.set('port', (process.env.PORT || 15767));
}

server.use(express.static(path.join(__dirname, 'public')));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------

server.get('*', async (req, res, next) => {
  try {
    // The top-level React component + HTML template for it
    const templateFile = path.join(__dirname, 'templates/index.html');
    const template = _.template(fs.readFileSync(templateFile, 'utf8'));

    let data = {
      title: 'Toni Karttunen',
      description: 'Toni Karttunen is a Finnish user experience designer ' +
                   'and software developer.',
      body: '',
      css: '',
      staticPath: staticPath
    };

    let html = template(data);
    res.send(html);
  } catch (err) {
    next(err);
  }
});

// 500 internal server error handler
server.use(function(error, req, res, next) {
  try {
    const templateFile = path.join(__dirname, 'templates/ErrorView.html');
    const template = _.template(fs.readFileSync(templateFile, 'utf8'));

    const data = {
      'title': 'Something Went Wrong'
    };

    const html = template(data);
    res.status(500).send(html);
  } catch (err) {
    next(err);
  }
});

//
// Launch the server
// -----------------------------------------------------------------------------

server.listen(server.get('port'), () => {
  if (process.send) {
    process.send('online');
  } else {
    console.log('The server is running at http://localhost:' + server.get('port'));
  }
});
