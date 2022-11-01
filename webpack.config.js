const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');


const PORT = 8000;

const ENVORINMENT = process.env.NODE_ENV || 'production';

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/'),
};


module.exports = {
  entry: path.join(paths.JS, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.DIST,
    publicPath: '/',
  },
  devServer: {
    compress: false,
    port: PORT,
  },
  performance: {
    hints: false,
  },
  mode: ENVORINMENT,
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ], 
  },  
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new webpack.ProvidePlugin({
      'React': 'react',
   }),
  ],
};
