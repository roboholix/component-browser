// NOTE: There is no need to copy over favicon.ico files as they are auto-added to dist via webpack
// config from the CopyPlugin, HtmlWebPack plugin and .ico file-loaders.
const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");

const nodeModules = path.join(__dirname, "node_modules");

module.exports = {
  resolve: {
    /**
     * `alias` maps the part on the right to the part on left for imports. (socket.io-client isn't the best example)
     * See the following commented example for more clarity:
     *
     * This maps src/utilities to "Utilities" so you can just use `import Utility from 'Utilities/utility';`
     * alias: {
     *   Utilities: path.resolve(__dirname, 'src/utilities/'),
     * }
     */
    alias: {
      "socket.io-client": path.join(
        nodeModules,
        "socket.io-client",
        "dist",
        "socket.io.js"
      ),
      // 'react'                : 'preact-compat',
      // 'react-dom/test-utils' : 'preact/test-utils',
      // 'react-dom'            : 'preact-compat' // Must be below test-utils
      "react-dom": "@hot-loader/react-dom",
      "@roboholix/component-browser": path.resolve(
        __dirname,
        "./src/components"
      ),
    },

    /**
     * `extensions` allows the given extensions to be imported without specifying the extension type.
     * Example: import File from '../path/to/file_without_extension_specified'
     */
    extensions: ["*", ".js", ".jsx", ".json"],
  },

  cache: true,

  target: "web",

  entry: path.resolve(__dirname, "src/index.js"),

  output: {
    path: path.resolve(
      __dirname,
      "dist"
    ) /* Note: Physical files are only output by the production build task `npm run build`. */,
    publicPath:
      "/component-browser/" /* The publicly accessible path for this bundle */,
    filename: "[name].[hash].js" /* Where the files are bundled into */,
    chunkFilename: "[name].[hash].js",
  },

  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 50000,
      minChunks: 1,
      maxAsyncRequests: 50,
      maxInitialRequests: 6,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },

  plugins: [
    // Clean out the output directory every time we build our bundle
    new CleanWebpackPlugin(),

    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

    // Generate HTML file that contains references to generated bundles.
    // See https://github.com/ampedandwired/html-webpack-plugin#basic-usage
    new HtmlWebpackPlugin({
      favicon: "./src/images/favicon.ico",
      template: "src/index.ejs",
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: false,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: false,
        useShortDoctype: false,
      },
      inject: true,
    }),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css",
    }),

    new CopyPlugin({
      patterns: [
        { from: "./src/assets", to: "./assets/" }
      ]
    }),
  ],

  /* Loaders are evaluated/executed from right to left (or bottom to top) */
  /* `loader` is intended for use with *ONE* loader only. It's shorthand for use: [{loader}] */
  /* Inline loading can be separated with `!` characters */
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/\.*.spec\.js/, /__test__/, /node_modules/],
        loader: "babel-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=[name].[ext]" },
      { test: /\.ico$/, loader: "file-loader?name=[name].[ext]" },

      // // "file" loader makes sure those assets get served by WebpackDevServer.
      // // When you `import` an asset, you get its (virtual) filename.
      // // In production, they would get copied to the `build` folder.
      // {
      //   exclude: [
      //     /\.html$/,
      //     /\.(js|jsx)$/,
      //     /\.css$/,
      //     /\.json$/,
      //     /\.bmp$/,
      //     /\.gif$/,
      //     /\.jpe?g$/,
      //     /\.png$/,
      //     /\.(woff|woff2|eot|ttf|otf)$/,
      //   ],
      //   loader: require.resolve('file-loader'),
      //   options: {
      //     name: 'static/media/[name].[hash:8].[ext]',
      //   },
      // }

      // ** STOP ** Are you adding a new loader?
      // Remember to add the new extension(s) to the "file" loader exclusion list.
    ],

    /* This is a RegExp stating webpack shouldn't parse any files matching 'socket.io-client' or 'jsmpeg.min.js' */
    noParse: [/socket.io-client/, /jsmpeg\.min\.js/],
  },
};
