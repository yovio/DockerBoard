function isDevEnv(arg) {
    if (arg == '-d' || arg.indexOf('webpack-dev-server') > -1) {
        return true;
    }
    else
        return false;
}

function buildConfig(env) {
    if (process.argv.find(isDevEnv))
        return require('./webpack.config.dev.js')(env)
    else
        return require('./webpack.config.prod.js')(env)
    
}

console.log(process.argv);
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