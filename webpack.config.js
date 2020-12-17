/**
 *  @type {import('webpack').Configuration}
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/i,
      loader: "css-loader",
      options: {
        import: true,
      }
    }]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm-browser.prod'
    },
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
    })
  ]
}