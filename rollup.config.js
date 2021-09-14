const commonjs = require('rollup-plugin-commonjs');

module.exports = {
  // Input is created by webpack in previous build step, in CommonJS format.
  input: 'dist/context.js',
  output: {
    file: 'dist/context.esm.js',
    format: 'esm'
  },
  plugins: [
    commonjs({
      // explicitly list exports otherwise only have 'default'
      namedExports: {
        'dist/context.js': [
          'contexts', 'constants', 'CONTEXT', 'CONTEXT_URL', 'CONTEXT_URL_V1',
          'DID_CONTEXT_URL'
        ]
      }
    })
  ]
};
