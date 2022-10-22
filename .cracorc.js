const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig, { _, paths }) => {
      paths.appBuild = webpackConfig.output.path = path.resolve("dist");

      webpackConfig.output.filename = "[name].js";
      webpackConfig.output.chunkFilename = "[name].chunk.js";

      return webpackConfig;
    },
  },
};
