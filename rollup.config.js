import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';
import svgr from '@svgr/rollup';
import url from 'postcss-url';
import vars from 'postcss-simple-vars';

const packageJson = require('./package.json');
const environment = process.env.ROLLUP_ENVIRONMENT;

export default {
  input: environment === 'prod' ? 'src/index.prod.ts' : 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: [
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.peerDependencies || {}),
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    copy({
      targets: [
        { src: 'package.json', dest: 'dist' },
        /* This is needed only for copying dummy images. These images are not part of the library. */
        { src: 'src/assets/images', dest: 'dist/assets' },
      ],
    }),
    postcss({
      to: 'dist/index.css',
      extract: true,
      plugins: [
        require('autoprefixer'),
        url({
          url: 'inline',
          maxSize: 5,
          ignoreFragmentWarning: true,
          optimizeSvgEncode: true,
          fallback: 'copy',
          assetsPath: 'dist',
        }),
        vars(),
      ],
      extensions: ['.css', '.scss'],
    }),
    json({}),
    svgr(),
  ],
};
