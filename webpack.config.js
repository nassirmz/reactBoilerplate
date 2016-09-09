module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  resolve: {
    root: __dirname,
    moduleDirectories: [
      'node_modules',
      './src/components'
    ],
    alias: {
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      },
      {
        loader: 'style!css',
        test: /\.css?$/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
