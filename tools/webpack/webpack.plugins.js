const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { inDev } = require('./webpack.helpers');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const supportedLanguages = require('../configs/support_languages.json'); // Import the JSON file

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  inDev() && new webpack.HotModuleReplacementPlugin(),
  inDev() && new ReactRefreshWebpackPlugin(),
  inDev() &&
  new MonacoWebpackPlugin({
    languages: supportedLanguages,
  }),
].filter(Boolean);
