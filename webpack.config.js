/**
 *  @type {import('webpack').Configuration}
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const {
  VueLoaderPlugin
} = require('vue-loader')

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }, ]
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    port: 9000,
    compress: true,
    contentBase: `/dist`,
  },
  output: {
    publicPath: `/`,
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html'
    }),
    new VueLoaderPlugin()
  ]
}