const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack"); // Used to access built-in plugins
const path = require("path");
const featureFlags = require("./configs/featureFlags.json");
const autoprefixer = require("autoprefixer");

const nodeEnv = "development";

// NODE_ENV set to 'development' tells React to build in either dev or prod modes.
// See bottom of https://facebook.github.io/react/downloads.html for details.
const GLOBALS = {
  __DEV__: true,
  "process.env.NODE_ENV": JSON.stringify(nodeEnv),
  ...featureFlags,
};

/* eslint-disable no-console */
console.log("");
console.log(
  "--------------------------------------------------------------------------------"
);
console.log(`NODE_ENV: ${nodeEnv}`);
console.log(
  "GLOBALS -----------------------------------------------------------------------"
);
console.log(GLOBALS);
console.log(
  "--------------------------------------------------------------------------------"
);
console.log("");
/* eslint-enable no-console */

module.exports = merge(common, {
  mode: nodeEnv,
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    openPage: "component-browser/",
    publicPath: "/component-browser/",
  },
  plugins: [
    // Useful for feature flags, ENV globals, and more. See https://webpack.js.org/plugins/define-plugin/
    new webpack.DefinePlugin(GLOBALS),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: true,
      noInfo: true, // Set to false to see a list of every file being bundled.
      options: {
        sassLoader: {
          includePaths: [path.resolve(__dirname, "src")],
        },
        context: "/",
        postcss: () => [autoprefixer],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // "postcss" loader applies autoprefixer to our CSS.
          // "css" loader resolves paths in CSS and adds assets as dependencies.
          // "style" loader turns CSS into JS modules that inject <style> tags.
          // In production, we use a plugin to extract that CSS to a file, but
          // in development "style" loader enables hot editing of CSS.
          require.resolve("style-loader"),
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve("postcss-loader"),
            options: {
              ident: "postcss", // https://webpack.js.org/guides/migrating/#complex-options
              plugins: () => [
                require("postcss-flexbugs-fixes"),
                autoprefixer({
                  flexbox: "no-2009",
                }),
              ],
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },

      // ** STOP ** Are you adding a new loader?
      // Remember to add the new extension(s) to the "file" loader exclusion list.
    ],
  },
});
