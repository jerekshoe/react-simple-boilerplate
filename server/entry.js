require('babel-register')({
  plugins: [
    [
      'babel-plugin-transform-require-ignore',
      {
        extensions: ['.scss', '.jpg', '.png', '.css']
      }
    ]
  ]
});
require('./server');
