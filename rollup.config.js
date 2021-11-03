const pjson = require('./package.json')
const { minify } = require('rollup-plugin-jspacker')

module.exports = [
  {
    input: pjson.main,
    output: {
      file: `dist/${pjson.name}.min.js`,
      name: pjson.name,
      format: 'umd',
    },
    plugins: [
      minify()
    ]
  }
]
