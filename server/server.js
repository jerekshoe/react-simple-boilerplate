import express from 'express';
import path from 'path';
import compression from 'compression';

const app = express();

app.use(compression());
app.use('/', express.static(path.resolve(__dirname, '..', 'dist')));
app.use('/dll', express.static(path.resolve(__dirname, '..', 'dll')));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '..', 'dist/index.html')));

console.log('App started');
app.listen(process.env.PORT || 8080);
