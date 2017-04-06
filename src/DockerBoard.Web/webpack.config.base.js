global.path = require('path');
global.webpack = require('webpack'); //to access webpack runtime

module.exports = function () {
    return {
        entry: ['./wwwroot/js/app.js'],
        output: {
            path: path.join(__dirname, '/wwwroot/assets'),
            filename: '[name].bundle.js',            
            sourceMapFilename: '[name].map'
        }        
    };
}