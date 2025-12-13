const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    app: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  devServer: {
    watchFiles: ["./src/index.js", "./src/template.js"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: "/.css$i",
        use: ["style-loader", "css-loader"],
      },
      {
        test: "/.html$i",
        loader: "html-loader",
      },
      {
        test: "/.(png|svg|jpg|gif)$/i",
        type: "asset/resource",
      },
      {
        test: /\.json$/,
        loader: "json-loader",
      },
    ],
  },
};
