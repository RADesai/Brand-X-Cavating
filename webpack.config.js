module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'build.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  node: {
    // dgram: "empty",
    // tap: "empty",
    fs: "empty"
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  }
}
