const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: "source-map",
  mode: "development",
});
