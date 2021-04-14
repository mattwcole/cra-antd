const WebpackBar = require("webpackbar");
const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
  webpack: {
    plugins: [new WebpackBar({ profile: true })],
  },
  plugins: [{ plugin: CracoAntDesignPlugin }],
};
