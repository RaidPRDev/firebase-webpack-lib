const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// mode = production does not build firebase correctly
// need to find out what are the defaults when using prod

module.exports = {
    mode: "none",
    entry: './src/index.js',
    optimization: {
        minimizer: []
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJsPlugin({uglifyOptions:{
            compress: false,
            output: {
                comments: false,
                beautify: false,
            }
        }})
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'firebase.js',
        library: 'firebaseSDK'
    }
};