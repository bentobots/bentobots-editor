module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loaders: 'buble-loader',
        // include: path.join(__dirname, 'src'),
        query: {
          objectAssign: 'Object.assign',
          transforms: {
            generator: false
          }
        }
      }
    ]
  }
}
