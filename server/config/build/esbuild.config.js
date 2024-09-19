const ESbuild = require('esbuild');
const path = require('path');
const envFilePlugin = require('esbuild-envfile-plugin');
const { dotenvRun } = require('@dotenv-run/esbuild');
// require('dotenv').config()

ESbuild.build({
  bundle: true,
  platform: 'node',
  format: 'cjs',
  entryPoints: [path.resolve('src/index.ts')],
  legalComments: 'none',
  outfile: path.resolve('dist/index.js'),
  minify: true,
  // plugins: [envFilePlugin()],
  plugins: [dotenvRun({
    verbose: true,
    root: "../../",
    prefix: 'MY_'
  })],
  // define: {
  //   'process.env.PORT': '"work"'
  // }
})