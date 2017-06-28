var webpack = require('webpack')
var path = require('path')


module.exports = {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            },
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: ['file-loader']
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: ['file-loader']
            },
            {
              test: /\.(js|jsx)$/,
              exclude: /(node_modules)/,
              use: ['babel-loader'],
            },
         ]
  },
}
