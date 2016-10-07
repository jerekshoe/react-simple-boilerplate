const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  context: path.resolve(__dirname, '..'),
  entry: [
    'babel-polyfill',
    'bootstrap-loader/extractStyles',
    './src/index',
  ],

  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel?cacheDirectory' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },
      { test: /\.(jpg|png|gif)$/, loader: 'file' },
      { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' },
      { test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000' },
      { test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' },
    ],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    moduleDirectories: ['node_modules'],
  },
};
