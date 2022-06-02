// This goes in cypress/plugins/index.js
const SharePointLogin = require("./sharepoint-login/").SharePointLogin;
const NodeAuth = require("./node-auth/").NodeAuth;
require("dotenv").config();

module.exports = (on, config) => {
  on("task", { SharePointLogin }), on("task", { NodeAuth });

  config.env.username = process.env.SP_USERNAME;
  config.env.password = process.env.SP_PASSWORD;
  return config;
};
