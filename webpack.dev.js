const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = resolve(__dirname, 'public');
const APP_DIR = resolve(__dirname, 'src');

module.exports = {
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            }],
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            }],
        }),
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'media/[name].[ext]',
              publicPath: '/',
            },
          },
        ],
      },
      {
        test: /\.(txt|xml)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
              publicPath: '/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/style.css',
    }),
    new HtmlWebpackPlugin({
      template: `${APP_DIR}/index.html`,
    }),
  ],
  devServer: {
    contentBase: APP_DIR,
    compress: true,
    port: 3001,
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
  mode: 'development',
};
