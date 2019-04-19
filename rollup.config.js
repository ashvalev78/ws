const typescript = require('rollup-plugin-typescript2');
const babel = require('rollup-plugin-babel');
const commonJs = require('rollup-plugin-commonjs');
const sourceMaps  =  require('rollup-plugin-sourcemaps');
const resolveNodeModules = require('rollup-plugin-node-resolve');
const uglify = require('rollup-plugin-uglify-es');
const config = require('./gulp/config');

const rollupConfig = {
  input: config.src.scripts + 'main.ts',
  format: 'iife',
  // sourcemap: true,
  plugins: [
    sourceMaps(),
    typescript({
      tsconfig: "tsconfig.json",
    }),
    resolveNodeModules(),
    commonJs(),
    babel({
      exclude: 'node_modules/**',
    }),
    (process.env.NODE_ENV === 'production' && uglify())
  ]
}

module.exports = rollupConfig;
