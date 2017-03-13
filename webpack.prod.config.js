var webpack             = require('webpack');
var HtmlWebpackPlugin   = require('html-webpack-plugin');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');
var ManifestPlugin      = require('webpack-manifest-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

module.exports = {
    devtool: 'hidden-source-map',
    entry: {
        application: './js/index.js',
        vendor: ['react', 'react-dom', 'react-router', 'mobx', 'mobx-react']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.svg'],
        modules: [
            'src',
            'node_modules',
        ],
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: __dirname + '/dist'
                })
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
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            },
            __DEVELOPMENT__: false
        }),
        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        // Shared code
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        }),
        new ExtractTextPlugin({
            filename: 'bundle.[chunkhash].css',
            disable: false,
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new ManifestPlugin({
            basePath: '/',
        }),
        new ChunkManifestPlugin({
            filename: 'chunk-manifest.json',
            manifestVariable: 'webpackManifest',
        }),
    ]
};
