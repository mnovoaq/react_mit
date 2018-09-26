//Dependencies
import express from "express";
import webpack from 'webpack';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import open from 'open';

//webpack Configuration
import webpackConfig from '../../webpack.config.dev';

//Server export
const port = 3000;

//Express App
const app = express();

//Webpack compiler
const webpackComplier = webpack(webpackConfig);

//Webpack Middlewares
app.use(webpackDevMiddleware(webpackComplier));
app.use(webpackHotMiddleware(webpackComplier));

//Sending all traffic to react
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,  '../public/index.html'));
});

//Listen export
app.listen(port, err => {
  if(!err) {
    open('http://localhost:${port}');
  }
})
