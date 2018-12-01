import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

const input = './compiled/index.js';
const external = ['react', 'react-native', 'styled-components'];

const buildUmd = ({ env }) => ({
  input,
  external,
  output: {
    name: 'ReactLayout',
    format: 'umd',
    sourcemap: true,
    file:
      env === 'production'
        ? `./dist/react-layout.umd.${env}.js`
        : `./dist/react-layout.umd.${env}.js`,
    exports: 'named',
    globals: {
      react: 'React',
      'react-native': 'ReactNative',
      'styled-components': 'styled'
    },
  },

  plugins: [
    resolve(),
    replace({
      exclude: 'node_modules/**',
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    commonjs({
      include: /node_modules/,
      namedExports: {
        'node_modules/prop-types/index.js': [
          'object',
          'oneOfType',
          'string',
          'node',
          'func',
          'bool',
          'element',
        ],
      },
    }),
    sourceMaps(),
    env === 'production' &&
      uglify({
        output: { comments: false },
        compress: {
          keep_infinity: true,
          pure_getters: true,
        },
        warnings: true,
        toplevel: false,
      }),
  ],
});

const buildCjs = ({ env }) => ({
  input,
  external: external.concat(Object.keys(pkg.dependencies)),
  output: {
    file: `./dist/${pkg.name}.cjs.${env}.js`,
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    replace({
      exclude: 'node_modules/**',
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    sourceMaps(),
  ],
});

export default [
  buildUmd({ env: 'production' }),
  buildUmd({ env: 'development' }),
  buildCjs({ env: 'production' }),
  buildCjs({ env: 'development' }),
  {
    input,
    external: external.concat(Object.keys(pkg.dependencies)),
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      babel({
        plugins: ['babel-plugin-annotate-pure-calls'],
      }),
      sourceMaps(),
    ],
  },
];
