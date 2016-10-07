import express from 'express';
import { match } from 'react-router';
import path from 'path';
import routes from '../src/routes';

const app = express();

app.use('/', express.static(path.resolve(__dirname, '..', 'dist')));

app.use((req, res) => {
  match({ routes, location: req.originalUrl }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      res.sendFile(path.resolve(__dirname, '..', 'index.html'));
    } else {
      res.status(404).send('Not found');
    }
  });
});

app.listen(process.env.PORT || 8080);
