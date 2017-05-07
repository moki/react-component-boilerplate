/* eslint-disable no-var, comma-dangle */
const webpack = require('webpack');
const resolve = require('path').resolve;

const libraryName = {
  filename: 'component-name',
  umdname: 'ComponentName',
};

const prodconfig = {
  context: resolve(__dirname, 'src'),
  entry: [
    'babel-polyfill',
    './lib/index.js',
  ],
  output: {
    path: resolve(__dirname, 'lib'),
    filename: `${libraryName.filename}.min.js`,
    library: libraryName.umdname,
    libraryTarget: 'umd',
    umdNamedDefine: true,
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
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
      },
    }),
  ]
};

module.exports = prodconfig;
