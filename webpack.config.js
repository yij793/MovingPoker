'use strict';
var webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var distDir = path.resolve(__dirname, 'dist');
module.exports = {
  entry: './src/script/app.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: './dist/bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new CleanWebpackPlugin({ distDir }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
