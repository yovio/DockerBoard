const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.base');

console.log('Using webpack.config.dev.js')

module.exports = function (env) {
    return webpackMerge(commonConfig(), {
        devServer: {
            contentBase: "./wwwroot",
            host: "localhost",
            port: 9000
        }
    })
}