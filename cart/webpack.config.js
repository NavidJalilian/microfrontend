const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { containerName, cartName, exposedCartName } = require("../config");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
    lazy: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: cartName,
      filename: "remoteEntry.js",
      exposes: {
        ["./" + exposedCartName]: "./src/index",
      },
      shared: ["faker"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
