let path = require('path');
let ExtractPlugin = require('extract-text-webpack-plugin');
let CleanPlugin = require('clean-webpack-plugin');
let HtmlPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

let extractPlugin = new ExtractPlugin({
  filename: "main.css"
});

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath: "dist", //// no need to set public path when using html-loader and html-plugin
  },
  module: {
    rules: [
      {
        // for javascript files
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          },
        ]
      },
      {
        // for scss
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        // for html files
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        // for images
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
              publicPath: "img/"
            }
          }
        ]
      },
      {
        // for multiple html files
        // import html files needed in the .js
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {name: "[name].[ext]"}
          }
        ],
        exclude: path.resolve(__dirname, "src/index.html")
      }
    ]
  },
  plugins: [
    // use jquery
    new webpack.ProvidePlugin({
      $: "jquery"
    }),
    extractPlugin,
    new CleanPlugin(["dist"]),
    new HtmlPlugin({
      filename: "index.html",
      template: "src/index.html"
    })
  ]
};