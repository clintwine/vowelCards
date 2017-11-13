const webpack = require('webpack');
const path = require('path');

module.exports = {
    "entry": [
        'webpack-dev-server/client?https://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        './app/index.js'
    ],
    "output": {
        "path": path.join(__dirname, '/build'),
        "filename": "bundle.js"
    },
    devtool: "cheap-module-eval-source-map",
    "module": {
        "loaders": [
            {
                "test": /\.js?$/,
                "loader": 'react-hot!babel-loader',
                "exclude": /node_modules/
            },
        ]
    },
    devServer: {
        contentBase: './build',
        hot: true,
        historyApiFallback: true,
        host: process.env.IP,
        //https: true,
        port: process.env.PORT,
        "public":"html-test-clintwine.c9users.io"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};