const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'aboutUs.html',
      template: path.resolve(__dirname, 'src/aboutUs.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'addremovefollower.html',
      template: path.resolve(__dirname, 'src/addremovefollower.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'hometimeline.html',
      template: path.resolve(__dirname, 'src/hometimeline.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'password.html',
      template: path.resolve(__dirname, 'src/password.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'posttweet.html',
      template: path.resolve(__dirname, 'src/posttweet.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'publishtimeline.html',
      template: path.resolve(__dirname, 'src/publishtimeline.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'register.html',
      template: path.resolve(__dirname, 'src/register.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'usertimeline.html',
      template: path.resolve(__dirname, 'src/usertimeline.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/i,
        loader: 'standard-loader',
        options: {
          env: {
            browser: true
          }
        }
      }
    ]
  },
  mode: 'development',
  devtool: 'inline-source-map',
}
