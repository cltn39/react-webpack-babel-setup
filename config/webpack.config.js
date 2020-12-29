const paths = require("./paths");

const webpack = require("webpack");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [paths.src + "/index.js"],
  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: "bundle.js",
    publicPath: "/",
  },
  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true, importLoaders: 1 },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: "asset/resource" },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: "asset/inline" },
    ],
  },
  // Customize the webpack build process
  plugins: [
    // new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: paths.src + "/assets",
    //       to: "assets",
    //       globOptions: {
    //         ignore: ["*.DS_Store"],
    //       },
    //     },
    //   ],
    // }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: paths.public,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
};
