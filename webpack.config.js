const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: ['./src/js/app.js', './src/scss/styles.scss']   
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: 'compressed',
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  mode: 'development',
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/,  
    aggregateTimeout: 300,  
    poll: 1000,  
  },
};