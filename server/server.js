// Third Party imports
import express from 'express';
import path from 'path';
import compression from 'compression';
import { RouterContext, match } from 'react-router';
import { renderToString } from 'react-dom/server';
import React from 'react';
import { Provider } from 'react-redux';
// import ReactDOM from 'react-dom/server';

// Project imports
import getRoutes from '../src/routes';
import configureStore from '../src/store';

const app = express();

app.use(compression());
app.use('/dist', express.static(path.resolve(__dirname, '..', 'dist')));
app.use('/dll', express.static(path.resolve(__dirname, '..', 'dll')));

// app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'dist/index.html')));

app.use((req, res) => {
  const store = configureStore();

  match({ routes: getRoutes(store), location: req.originalUrl }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      res.status(500);
    } else if (renderProps) {
      const component = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      res.status(200);
      res.send(`<!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
            <link rel='stylesheet' href='dist/bundle.css'>
          </head>
          <body>
            <div id="main">${component}</div>
            <script src="dll/dll.react.js" type="text/javascript"></script>
            <script src="dist/bundle.js" type="text/javascript"></script>
          </body>
        </html>`
      );
    } else {
      res.status(404).send('Not found');
    }
  });
});

const port = process.env.PORT || 8080;
const server = app.listen(port, () => console.log('Server started', server.address()));
