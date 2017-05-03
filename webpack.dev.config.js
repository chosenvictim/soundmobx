var webpack             = require('webpack');
var HtmlWebpackPlugin   = require('html-webpack-plugin');
var commonConfig        = require('./webpack.common.config.js');

module.exports = Object.assign({}, commonConfig, {
    devtool: 'source-map',
    output: {
        path: __dirname,
        pathinfo: true,
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: {
          index: '/'
        },
        stats: {
            assets: true,
            children: false,
            chunks: false,
            hash: false,
            warnings: true,
            colors: {
                green: '\u001b[32m'
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }, {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /.+\.config.js/],
                loader: 'babel-loader',
                query: {
                    presets: [['es2015', {modules: false}], 'react', 'stage-2'],
                    plugins: ['transform-decorators-legacy', 'transform-class-properties']
                }
            }, {
                test: /\.(jpe?g|gif|png)$/i,
                loader: 'url-loader?limit=10000'
            }, {
                test: /\.ttf$/,
                loader: 'url-loader?limit=10000'
            }, {
                test: /\.svg?$/,
                loader: 'svg-sprite-loader?name=[name]_[hash]'
            }
        ],
    },
    plugins: [
        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: 'index.html',
        }),
        // Shared code
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            },
            __CLIENT__: JSON.stringify(true),
            __DEVELOPMENT__: true,
            __DEVTOOLS__: true
        }),
    ]
});
