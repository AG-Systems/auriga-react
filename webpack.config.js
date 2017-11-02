/*
    ./webpack.config.js
*/

const path = require('path');
const url_project = process.env.C9_HOSTNAME
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  devServer: {
    compress: true,
    disableHostCheck: true, 
    // public: 'http://react-build-ag-systems.c9users.io'
    public: url_project
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
    plugins: [HtmlWebpackPluginConfig]
}

