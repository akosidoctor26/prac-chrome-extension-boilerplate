import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import scss from 'rollup-plugin-scss';
import { uglify } from 'rollup-plugin-uglify';
import packageJSON from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: packageJSON.module,
      format: 'esm'
    }
  ],
  plugins: [
    nodeResolve({
      extensions: ['.jsx', '.js'],
      jsnext: true,
      main: true,
      browser: true
    }),
    scss(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react']
    }),
    commonjs(),
    replace({
      exclude: 'node_modules/**',
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      )
    }),
    uglify({ toplevel: true })
  ]
};
