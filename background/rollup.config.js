import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
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
    nodeResolve({ extensions: ['.js'] }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env']
    }),
    commonjs(),
    uglify({ toplevel: true })
  ]
};
