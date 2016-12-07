const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  context: path.resolve(__dirname, '..'),
  entry: [
    'babel-polyfill',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?cacheDirectory' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' }) },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!sass-loader' }) },
      { test: /\.(jpg|png|gif)$/, loader: 'file-loader' },
      { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      { test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000' },
    ],
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
    }),
    new webpack.PrefetchPlugin('./src/index.js'),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('../dll/react-manifest.json'),
    }),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('../dll/other-manifest.json'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  stats: 'verbose',
};
