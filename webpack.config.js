module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
          'node_modules',
          './app/components',
          './app/api'
        ],
        alias: {
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
