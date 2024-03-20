const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { containerName, productsName } = require("../config"); 

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
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
