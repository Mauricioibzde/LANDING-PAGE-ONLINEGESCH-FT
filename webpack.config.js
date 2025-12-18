const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => ({
  mode: argv && argv.mode ? argv.mode : 'development',
  entry: path.resolve(__dirname, 'script/script.js'),
  output: {
    filename: 'assets/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: argv && argv.mode === 'production' ? false : 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 5173,
    open: true,
    hot: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'index.html', to: '.' },
        { from: 'login.html', to: '.' },
        { from: 'cart.html', to: '.' },
        { from: 'create-acount.html', to: '.' },
        { from: 'wishlist.html', to: '.' },
        { from: 'checkout.html', to: '.' },
        { from: 'account.html', to: '.' },
        { from: 'about.html', to: '.' },
           { from: 'product-details.html', to: '.' },
        { from: 'contact.html', to: '.' },
        { from: 'style', to: 'style' },
        { from: 'img', to: 'img' },
      ],
    }),
  ],
});
