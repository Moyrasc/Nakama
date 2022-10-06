const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["./src/front/js/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              url: false,
            },
          },
        ],
      }, //css only files
      {
        test: /\.(png|svg|jpg|gif|jpeg|webp)$/,
        use: {
          loader: "file-loader",
          options: { name: "[name].[ext]" },
        },
      }, //for images
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        use: ["file-loader"],
      }, //for fonts
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "icono_nakama.ico",
      template: "template.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/front/img", to: "images" }],
    }),
    new Dotenv({ safe: true, systemvars: true }),
  ],
};
