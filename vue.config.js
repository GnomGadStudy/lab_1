module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    compress: true,
    disableHostCheck: true,   // That solved it
  }
}
