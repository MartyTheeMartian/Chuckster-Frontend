const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const PORT = 8000;

var mode = '';

switch (process.env.NODE_ENV) {
  case 'production':
    mode = process.env.NODE_ENV;
    break;
  case 'development':
    mode = process.env.NODE_ENV;
    break;
  case 'local':
    mode = 'development';
    break;
  default:
    mode = 'production';
};

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
  optimization: {
    nodeEnv: false,
  },
  mode,
  resolve: {
    preferAbsolute: true,
    extensions: ['.ts', '.tsx', '.gql', '.js', '.json'],
    modules: [paths.SRC, 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
};
