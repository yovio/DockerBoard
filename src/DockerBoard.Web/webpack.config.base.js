global.path = require('path');
global.webpack = require('webpack'); //to access webpack runtime

module.exports = function () {
    return {
        entry: ['./wwwroot/js/app.jsx'],
        output: {
            path: path.join(__dirname, '/wwwroot/assets'),
            filename: '[name].bundle.js',            
            sourceMapFilename: '[name].map'
        },
        resolve: {
            extensions: [".webpack.js", ".web.js", ".js", ".json", ".jsx"],
            modules: ["./wwwroot/js", "node_modules"]
        },
        module: {
            rules: [
                {
                    test: /\.jsx$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                }
            ]
        }
    };
}