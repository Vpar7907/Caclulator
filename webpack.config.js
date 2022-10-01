const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.js$/, use: "babel-loader" },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  plugins: [],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
