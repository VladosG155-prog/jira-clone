import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { buildLoaders } from "./config/buildLoaders";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

const isDevelopment = process.env.NODE_ENV !== "production";

export default () => {
  return {
    mode: isDevelopment ? "development" : "production",

    entry: path.resolve(__dirname, "src", "index.tsx"),
    devtool: isDevelopment ? "inline-source-map" : "source-map",
    output: {
      filename: "[name].[contenthash].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, "public"),
      },
      hot: true,
      port: 5003,
      historyApiFallback: true,
    },
    module: {
      rules: buildLoaders(),
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new ForkTsCheckerWebpackPlugin(),
      new MiniCssExtractPlugin(),
      isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
  };
};
