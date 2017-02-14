var webpack = require('webpack');
var path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      })
    ],
    resolve: {
        root: __dirname,
        modulesDirectories: [
          'node_modules',
          './app/components',
          './app/api'
        ],
        alias: {
          app: 'app',
          actions: 'app/actions/actions.jsx',
          reducers: 'app/reducers/reducers.jsx',
          configureStore: 'app/store/configureStore.jsx'

        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }]
    }
  };
