const { alias } = require("react-app-rewire-alias");
const path = require("path");
module.exports = function override(config) {
  alias({
    "@component": path.resolve(__dirname, "src/components"),
    "@icons": path.resolve(__dirname, "src/assets/icons"),
    "@img": path.resolve(__dirname, "src/assets/img"),
    "@brandLogos": path.resolve(__dirname, "src/assets/brandLogos"),
    "@style": path.resolve(__dirname, "src/assets/style/scss/global"),
  })(config);

  return config;
};
