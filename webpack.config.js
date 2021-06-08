const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        title: '模块热更新'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    // module: {
    //     rules: [
    //         {
    //         test: /\.css$/i,
    //         use: ['style-loader', 'css-loader'],
    //         },
    //         {
    //         test: /\.(png|svg|jpg|jpeg|gif)$/i,
    //         type: 'asset/resource',
    //         },
    //         {
    //         test: /\.(woff|woff2|eot|ttf|otf)$/i,
    //         type: 'asset/resource',
    //         },
    //         {
    //             test: /\.(csv|tsv)$/,
    //             use: [
    //             'csv-loader'
    //             ]
    //         },
    //         {
    //             test: /\.xml$/,
    //             use: [
    //             'xml-loader'
    //             ]
    //         }
    //     ],
    // },
};