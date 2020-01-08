/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = path.resolve(__dirname, 'src');
const outputPath = path.resolve(__dirname, '..', 'Speakers.Api');

const htmlPlugin = new HtmlWebpackPlugin({
  filename: path.resolve(outputPath, 'Views', 'SPA', 'index.html'),
  template: './src/index.html',
  inject: 'head',
});

module.exports = {
  entry: {
    home: ['core-js/stable', path.resolve(root, 'index.js')],
  },
  output: {
    pathinfo: true,
    path: path.resolve(outputPath, 'js'),
    filename: 'speakers.[contenthash].js',
    publicPath: '/js',
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    htmlPlugin,
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: root,
        enforce: 'pre',
        use: {
          loader: require.resolve('eslint-loader'),
          options: {
            eslintPath: require.resolve('eslint'),
          },
        },
      },
      {
        test: /\.js?$/,
        include: root,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.gif|\.jpg$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
