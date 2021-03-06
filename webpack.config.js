var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: true,
  devtool: '#eval-source-map',
  context: path.join(__dirname, 'resources/assets'),

  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './js/app.js',
    './sass/app.scss'
  ],

  output: {
    path: path.join(__dirname, './public/built'),
    publicPath: '/built',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')})
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude:[/node_modules/],
        loaders: ['react-hot', 'babel'],
        loose:['es6.modules']
      },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }


};
