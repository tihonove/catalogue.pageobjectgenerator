var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        bookmarklet: './src/app'
    },
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader?loose'
            },
            {
                test: /\.(css|less)$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {test: /\.less$/, loader: 'less-loader'},
            {test: /\.(woff|eot)$/, loader: "file-loader"}
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};
