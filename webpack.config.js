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
          '.js', '.jsx'
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
                loader: "style-loader!css-loader"
            }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}