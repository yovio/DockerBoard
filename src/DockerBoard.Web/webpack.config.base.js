global.path = require('path');
global.webpack = require('webpack'); //to access webpack runtime

module.exports = function () {
    return {
        entry: {            
            'main': './wwwroot/js/app.js'
        },
        output: {
            path: path.join(__dirname, '/wwwroot/assets'),
            filename: '[name].bundle.js',            
            sourceMapFilename: '[name].map'
        },
        resolve: {
            extensions: ['.ts', '.js', '.json', '.jsx'],
            modules: [path.join(__dirname, 'src'), 'node_modules']
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: "babel-loader"
                }],
        },
        plugins: [            
        ],
    };
}