const path = require("path");
module.exports = {
  mode: "development",
  entry: "./js/HomeTask3.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
