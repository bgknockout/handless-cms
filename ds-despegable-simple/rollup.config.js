const production = process.env.PRODUCTION;
const replace = require('@rollup/plugin-replace');
const resolve = require('rollup-plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');
const serve = require('rollup-plugin-serve');
const livereload = require('rollup-plugin-livereload');
const commonjs = require('@rollup/plugin-commonjs');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './out-tsc/src/main.es.js',
  output: [
    {
      file: './dist/bundle.js',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      mainFields: ['module', 'main', 'jsnext:main', 'browser'],
      extensions,
    }),
    terser(),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    !production && serve('.'),
    !production && livereload('.'),
  ],
};
