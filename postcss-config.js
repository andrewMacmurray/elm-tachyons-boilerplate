module.exports = {
  input: 'src/css/index.css',
  output: 'public/style.min.css',
  use: [
    'autoprefixer',
    'postcss-import',
    'postcss-custom-media',
    'postcss-clean',
    'postcss-custom-properties'
  ]
}
