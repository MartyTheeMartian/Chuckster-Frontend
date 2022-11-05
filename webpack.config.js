const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const PORT = 8000;

const ENVORINMENT = process.env.NODE_ENV || 'production';

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
};


module.exports = {
  entry: path.join(paths.SRC, 'index.tsx'),
  context: paths.SRC,
  output: {
    filename: 'bundle.js',
    path: path.DIST,
    publicPath: 'auto',
    clean: true,
  },
  devServer: {
    compress: false,
    port: PORT,
  },
  devtool: "eval-cheap-source-map",
  performance: {
    hints: false,
  },
  mode: ENVORINMENT,
  resolve: {
    preferRelative: true,
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
};
