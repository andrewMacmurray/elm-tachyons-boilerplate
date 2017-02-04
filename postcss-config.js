module.exports = {
  input: 'app/css/main.css',
  output: 'public/style.css',
  use: [
    'postcss-import',
    'postcss-custom-media',
    'postcss-custom-properties'
  ]
}
