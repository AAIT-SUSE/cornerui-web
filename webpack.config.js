let path = require('path');
let ExtractPlugin = require('extract-text-webpack-plugin');
let CleanPlugin = require('clean-webpack-plugin');
let HtmlPlugin = require('html-webpack-plugin');

let extractPlugin = new ExtractPlugin({
  filename: "main.css"
});

module.exports({
  entry: "src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath: "dist", //// no need to set public path when using html-loader and html-plugin
  },
  modules: {
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
        // for less
        test: /\.less$/,
        use: extractPlugin.extract({
          use: ["css-loader", "less-loader"]
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
        ]
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
      template: "src/index.html"
    })
  ]
});