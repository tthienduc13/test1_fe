const { alias } = require("react-app-rewire-alias");
const path = require("path");
module.exports = function override(config) {
  alias({
    "@icons": path.resolve(__dirname, "src/assets/icons"),
  })(config);

  return config;
};
