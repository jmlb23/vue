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
  entry: "./src/index.ts",
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        esModule: true
      }
    }, {
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    }]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
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