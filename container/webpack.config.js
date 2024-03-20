const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { containerName, productsName, cartName } = require("../config");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
    lazy: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: containerName,
      remotes: {
        [productsName]: productsName + "@http://localhost:8081/remoteEntry.js",
        [cartName]: cartName + "@http://localhost:8082/remoteEntry.js",
      },
      shared: ["faker"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
