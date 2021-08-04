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
    mockroblog: path.resolve(__dirname,'src/scripts/mockroblog.js'),
    tailwind: path.resolve(__dirname,'src/tailwind.css')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.resolve(__dirname, 'src/index.html'),
      chunks:['login','tailwind'],
    }),
    new HtmlWebpackPlugin({
      filename: 'aboutUs.html',
      inject: true,
      template: path.resolve(__dirname, 'src/aboutUs.html'),
      chunks:['tailwind'],
    }),
    new HtmlWebpackPlugin({
      filename: 'addremovefollower.html',
      inject: true,
      template: path.resolve(__dirname, 'src/addremovefollower.html'),
      chunks:['addremove','tailwind'],
    }),
    new HtmlWebpackPlugin({
      filename: 'hometimeline.html',
      inject: true,
      template: path.resolve(__dirname, 'src/hometimeline.html'),
      chunks:['timeline','tailwind'],
    }),
    new HtmlWebpackPlugin({
      filename: 'password.html',
      inject: true,
      template: path.resolve(__dirname, 'src/password.html'),
      chunks:['tailwind'],
    }),
    new HtmlWebpackPlugin({
      filename: 'posttweet.html',
      inject: true,
      template: path.resolve(__dirname, 'src/posttweet.html'),
      chunks:['tailwind','postTweet'],
    }),
    new HtmlWebpackPlugin({
      filename: 'publishtimeline.html',
      inject: true,
      template: path.resolve(__dirname, 'src/publishtimeline.html'),
      chunks:['tailwind','timeline'],
    }),
    new HtmlWebpackPlugin({
      filename: 'register.html',
      inject: true,
      template: path.resolve(__dirname, 'src/register.html'),
      chunks:['register','tailwind'],
    }),
    new HtmlWebpackPlugin({
      filename: 'usertimeline.html',
      inject: true,
      template: path.resolve(__dirname, 'src/usertimeline.html'),
      chunks:['tailwind','timeline'],
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
