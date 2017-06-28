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
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  module: {
    rules: [
             {
              test: /\.css$/,
              use: ['style-loader css-loader']
            },
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: ['file-loader']
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: ['file-loader']
            }
         ]
  },
}
