const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'main.js'
    },
    devServer: {
        contantBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './dist/index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exculude: '/node_modules/',
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }

};