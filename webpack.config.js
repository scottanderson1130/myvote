const HtmlWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");
const webpack = require("webpack");
const { HotModuleReplacementPlugin } = require("webpack");
const htmlPlugin = new HtmlWebpackPlugin({
  template: "./client/index.html",
  filename: "./index.html",
});

module.exports = {
  entry: join(__dirname, "./src/index.jsx"),
  target: "node",
  output: {
    path: join(__dirname, "build"),
    filename: "app.min.js",
    publicPath: "/",
  },
  plugins: [
    htmlPlugin
  ],
  resolve: {
    modules: [join("node_modules"), "node_modules"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
