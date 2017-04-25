const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: process.cwd(),
  entry: {
    react: [
      'babel-polyfill',
      'core-js',
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux',
      'redux-saga',
    ],
  },

  output: {
    filename: 'dll.[name].js',
    path: path.join(__dirname, '..', 'dll'),

    // The name of the global variable which the library's
    // require() function will be assigned to
    library: '[name]',
  },

  plugins: [
    new webpack.DllPlugin({
      // The path to the manifest file which maps between
      // modules included in a bundle and the internal IDs
      // within that bundle
      path: 'dll/[name]-manifest.json',
      // The name of the global variable which the library's
      // require function has been assigned to. This must match the
      // output.library option above
      name: '[name]',
    }),
  ],
};
