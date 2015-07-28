/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import 'babel/polyfill';
import _ from 'underscore';
import fs from 'fs';
import path from 'path';
import express from 'express';
// import React from 'react/addons';
import './core/Dispatcher';
import './stores/AppStore';
import { staticPath } from './utilities/static/StaticPath';
// import db from './core/Database';
// import App from './components/App';

const server = express();

const DEVELOPMENT = process.env.NODE_ENV !== 'production';
if (DEVELOPMENT === true) {
  server.set('port', (process.env.PORT || 5000));
} else {
  server.set('port', (process.env.PORT || 15767));
}

server.use(express.static(path.join(__dirname, 'public')));

//
// Register API middleware
// -----------------------------------------------------------------------------
server.use('/api/query', require('./api/query'));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------

// The top-level React component + HTML template for it
const templateFile = path.join(__dirname, 'templates/index.html');
const template = _.template(fs.readFileSync(templateFile, 'utf8'));

server.get('*', async (req, res, next) => {
  try {
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

    // TODO: Temporary fix #159
    // if (['/', '/about', '/privacy'].indexOf(req.path) !== -1) {
    //   await db.getPage(req.path);
    // }
    // let notFound = false;
    // let css = [];
    // let data = {description: ''};
    // let app = (<App
    //   path={req.path}
    //   context={{
    //     onInsertCss: value => css.push(value),
    //     onSetTitle: value => data.title = value,
    //     onSetMeta: (key, value) => data[key] = value,
    //     onPageNotFound: () => notFound = true
    //   }} />);

    // data.body = React.renderToString(app);
    // data.css = css.join('');
    // let html = template(data);
    // if (notFound) {
    //   res.status(404);
    // }
    // res.send(html);
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
