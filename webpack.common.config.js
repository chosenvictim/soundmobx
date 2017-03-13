var webpack             = require('webpack');

module.exports = {
    entry: {
        application: './js/index.js',
        vendor: ['react', 'react-dom', 'react-router', 'mobx', 'mobx-react']
    },
    resolve: {
        extensions: ['.js', '.jsx', '.svg'],
        modules: [
            'src',
            'node_modules',
        ],
    }
}
