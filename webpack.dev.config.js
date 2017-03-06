var webpack             = require('webpack');
var HtmlWebpackPlugin   = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',

    entry: {
        application: './src/index.js',
        vendor: ['react', 'react-dom', 'react-router']
    },

    output: {
        path: __dirname,
        pathinfo: true,
        filename: 'app.js',
        publicPath: '/',
    },

    resolve: {
        extensions: ['.js', '.jsx', '.svg'],
        modules: [
            'src',
            'node_modules',
        ],
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
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /.+\.config.js/],
                loader: 'babel-loader',
                query: {
                    presets: [['es2015', {modules: false}], 'react', 'stage-2']
                }
            }, {
                test: /\.(jpe?g|gif|png)$/i,
                loader: 'url-loader?limit=10000'
            }, {
                test: /\.ttf$/,
                loader: "url-loader?limit=10000"
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
            __CLIENT__: JSON.stringify(true),
            __DEVELOPMENT__: true,
            __DEVTOOLS__: true
        }),
    ]
};
