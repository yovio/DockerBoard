function buildConfig(env) {
    if (process.argv.indexOf('-d') > -1)
        return require('./webpack.config.dev.js')(env)
    else
        return require('./webpack.config.prod.js')(env)
    
}

module.exports = buildConfig;

//"use strict";

//module.exports = {
//    entry: "./src/file.js",
//    output: {
//        filename: "./dist/bundle.js"
//    },
//    devServer: {
//        contentBase: ".",
//        host: "localhost",
//        port: 9000
//    },
//    module: {
//        loaders: [
//            {
//                test: /\.jsx?$/,
//                loader: "babel-loader"
//            }
//        ]
//    }
//};