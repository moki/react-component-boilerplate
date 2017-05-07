/* eslint-disable no-var, comma-dangle */
const webpack = require('webpack');
const resolve = require('path').resolve;

const devconfig = {
  context: resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'eval',
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
    stats: 'errors-only',
    host: 'localhost',
    port: '3000',
    watchOptions: {
      ignored: /node_modules/,
    },
    compress: true,
    historyApiFallback: true,
    clientLogLevel: 'none',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

module.exports = devconfig;
