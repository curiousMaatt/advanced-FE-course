const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: [
    './src/scripts/index.js'
  ],
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
        filenem: "index.html",
        template: "./src/index.html"
    }),
  ],
  module: {
    rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                    },
                },
            ],
        },
        {
            test: /\.scss$/i,
            use: [
              'style-loader', 
              'css-loader', 
              'sass-loader',
            ],
        }
    ]
  }
};