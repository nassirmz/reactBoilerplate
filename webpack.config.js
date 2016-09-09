module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    moduleDirectories: [
      'node_modules',
      './src/components'
    ],
    alias: {
      styles: 'styles/main.css'
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
