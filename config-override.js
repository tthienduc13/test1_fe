const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@": "src",
    "@icons": "src/assets/icons",
    "@img": "src/img",
  })(config);

  return config;
};
