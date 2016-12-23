var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    resolve:{
        root:[path.join(__dirname,"src")],
        extensions:["",".js",".vue"]
    },
    entry:{
        'main':['./src/entry.js']
    },
    output:{
        path:'./dist',
        publicPath:'/',
        filename:'[name].[hash].js'
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.css/,
                loader: "style!css"
            },
            {
                test: /\.html$/,
                loader: "html"
            },
            {
                test: /\.vue$/,
                loader: "vue"
            },
            {
                test: /\.(png|jpg|svg)(\?.*)?$/,
                loader: 'url-loader?limit=8192'
            },
            { test: /\.(ttf|eot|woff)(\?.*)?$/, loader: "file" },
            { test: /iview.src.*?js$/, loader: 'babel' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
        ]
    },
    devtool:"cheap-module-source-map",
    plugins:[
        new HtmlWebpackPlugin({
            title:"Loading...",
            template: 'src/index.html'
        })
    ]
}