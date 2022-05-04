const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "./client/src/index.jsx"),
  output: {
    path: path.join(__dirname, "client/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
};
