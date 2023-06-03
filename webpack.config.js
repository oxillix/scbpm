const path = require('path');

module.exports = {
  entry: './src/sbpm.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'sbpm.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
};
