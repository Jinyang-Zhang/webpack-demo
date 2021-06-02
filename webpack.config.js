const path = require('path');

module.exports = {
    // entry: './src/index.js',
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    mode: 'development',
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
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