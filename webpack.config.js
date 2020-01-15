const webpack = require("webpack");
const path = require("path");

const APP_DIR = path.resolve(__dirname, "ClientApp");
const PUBLIC_DIR = path.resolve(__dirname, "public");

const config = {
  entry: {
    home: APP_DIR + "/app.js",
    about: APP_DIR + "/about.js",
    contact: APP_DIR + "/contact.js",
    stuff: APP_DIR + "/stuff.js"
  },
  devServer: {
    contentBase: PUBLIC_DIR,
    port: 9000,
    open: true,
    historyApiFallback: true
  },
  output: {
    path: PUBLIC_DIR,
    filename: "[name]-bundle.js"
  },
  devtool: "source-map",
  mode: "development"
};

module.exports = config;
