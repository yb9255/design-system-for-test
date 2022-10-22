const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig, { _, paths }) => {
      paths.appBuild = webpackConfig.output.path = path.resolve("dist");
      webpackConfig.output.filename = "index.js";
      webpackConfig.output.library = "ydsft";
      webpackConfig.output.libraryTarget = "umd";
      webpackConfig.output.globalObject = "this";
      webpackConfig.externals = {
        react: "react",
        "react-dom": "react-dom",
        "styled-components": "styled-components",
      };

      return webpackConfig;
    },
  },
};
