const path = require("path");
const pkg = require("./package.json");

const external = Object.keys(pkg.peerDependencies || {});

module.exports = {
  format: "cjs",
  tsconfig: path.resolve(__dirname, "tsconfig.json"),
  rollup(config) {
    config.external = external;
    return config;
  },
};
