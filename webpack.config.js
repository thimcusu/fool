const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require('webpack');
const port = process.env.PORT || 3000;

module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [  
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        // {
        //   // For CSS modules
        //   test: /\.module\.css$/i,
        //   use: [
        //     'style-loader',
        //     {
        //       loader: 'css-loader',
        //       options: {
        //         modules: true,
        //       },
        //     },
        //   ],
        //   test: /\.css$/i,
        //   use: ['style-loader', 'css-loader'],
        // },
        //For Pure css
        {
          test: /\.css$/i,
          exclude: /\.module\.css$/i,
          use: ['style-loader', 'css-loader']
        },
      ]
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ],
    stats: {
      children: false
    }
};