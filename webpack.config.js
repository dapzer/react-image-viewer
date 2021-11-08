const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/lib/index.ts',
  output: {
    filename: "index.js",
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "umd",
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: {
      // Needed when library is linked via `npm link` to app
      react: path.resolve("./node_modules/react")
    }
  },
  externals: {
    react: 'react',
    "styled-components": {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      amd: "styled-components",
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ],
  }
}