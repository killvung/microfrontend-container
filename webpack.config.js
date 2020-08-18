const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
    devServer: {
        port: 3001,
    },
    output: {
        publicPath: "http://localhost:3001/",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "app_container",
            filename: "remoteEntry.js",
            exposes: {
                './App': "./src/App"
            },
            remotes: {
                images_remote: "images_remote"
            },
            shared: { react: { singleton: true }, "react-dom": { singleton: true } }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })

    ]
}