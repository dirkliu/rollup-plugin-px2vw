import babel from '@rollup/plugin-babel'

const config = {
  input: 'src/index.js',
  output: [{
    file: 'dist/px2vw.esm.js',
    format: 'esm',
  }, {
    file: 'dist/px2vw.js',
    format: 'cjs',    
  }],
  plugins: [
    babel({ babelHelpers: 'bundled' })
  ]
}

export default config
