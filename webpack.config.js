const path = require('path');

module.exports = {
  entry: {
    vk: './src/providers/vkontakte',
    ok: './src/providers/odnoklassniki',
  },
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
    filename: 'social.[name].js',
    path: path.resolve(__dirname, 'lib'),
    library: ['social', '[name]'],
  },
};
