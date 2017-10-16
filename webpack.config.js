const webpack = require('webpack')
const {resolve} = require('path')
module.exports = {
    entry: ['./src/index.js'],
    output: {
        publicPath: '/dist/',
        filename: 'bundle.js',
        path: resolve(__dirname, './dist')
    },
    resolve: {
        extensions: [
          '.js', '.jsx', 'scss'
        ]
      },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                loader: 'eslint-loader'
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]"
            }, {
                test: /\.scss$/,
                loader: "style-loader!css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]!sass-loader"
            },{
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'img/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        port: 9999
    }
}