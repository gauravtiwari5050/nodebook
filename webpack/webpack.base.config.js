const path = require('path');
const vueConfig = require('./vue-loader.config');
const clientEntries = require('./webpack_entries').client_entries;

const vendorEntries = {
  vendor: [
    'es6-promise',
    'vue',
    'vuex',
    'vue-router',
    'axios',
    'lodash',
  ],
};

module.exports = {
  devtool: '#source-map',
  entry: Object.assign({}, clientEntries, vendorEntries),
  output: {
    path: path.resolve(__dirname, '../'),
    filename: '[name]/dist/build.js',
  },
  resolve: {
    alias: {
      public: path.resolve(__dirname, '../public'),
    },
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueConfig,
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
      // {
      //   test: /\.scss$/,
      //   loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
      // },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
};
