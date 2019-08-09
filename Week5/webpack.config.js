const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  // mode: "development",
  entry: "./js/HomeTask3.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
