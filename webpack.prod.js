const { merge } = require('webpack-merge');
const common = require('./wepack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map'
});
