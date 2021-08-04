const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    clean: true
    // path: path.resolve(__dirname, 'dist')

  },
  entry: {
   addremove: path.resolve(__dirname,'src/scripts/addremove.js'),
login: path.resolve(__dirname,'src/scripts/login.js'),
register: path.resolve(__dirname,'src/scripts/register.js'),
postTweet: path.resolve(__dirname,'src/scripts/postTweet.js'),
timeline: path.resolve(__dirname,'src/scripts/timeline.js'),
mockroblog: path.resolve(__dirname,'src/scripts/mockroblog.js')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.resolve(__dirname, 'src/index.html'),
      chunks:['addremove','login','register','postTweet','timeline','mockroblog'],
    }),
    new HtmlWebpackPlugin({
      filename: 'aboutUs.html',
      inject: true,
      template: path.resolve(__dirname, 'src/aboutUs.html'),
      chunks:['addremove','login','register','postTweet','timeline','mockroblog'],
    }),
    new HtmlWebpackPlugin({
      filename: 'addremovefollower.html',
      inject: true,
      template: path.resolve(__dirname, 'src/addremovefollower.html'),
      chunks:['addremove','login','register','postTweet','timeline','mockroblog'],
    }),
    new HtmlWebpackPlugin({
      filename: 'hometimeline.html',
      inject: true,
      template: path.resolve(__dirname, 'src/hometimeline.html'),
      chunks:['addremove','login','register','postTweet','timeline','mockroblog'],
    }),
    new HtmlWebpackPlugin({
      filename: 'password.html',
      inject: true,
      template: path.resolve(__dirname, 'src/password.html'),
      chunks:['addremove','login','register','postTweet','timeline','mockroblog'],
    }),
    new HtmlWebpackPlugin({
      filename: 'posttweet.html',
      inject: true,
      template: path.resolve(__dirname, 'src/posttweet.html'),
      chunks:['addremove','login','register','postTweet','timeline','mockroblog'],
    }),
    new HtmlWebpackPlugin({
      filename: 'publishtimeline.html',
      inject: true,
      template: path.resolve(__dirname, 'src/publishtimeline.html'),
      chunks:['addremove','login','register','postTweet','timeline','mockroblog'],
    }),
    new HtmlWebpackPlugin({
      filename: 'register.html',
      inject: true,
      template: path.resolve(__dirname, 'src/register.html'),
      chunks:['addremove','login','register','postTweet','timeline','mockroblog'],
    }),
    new HtmlWebpackPlugin({
      filename: 'usertimeline.html',
      inject: true,
      template: path.resolve(__dirname, 'src/usertimeline.html'),
      chunks:['addremove','login','register','postTweet','timeline','mockroblog'],
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
