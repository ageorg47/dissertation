const access_control = artifacts.require("access_control");

module.exports = function(deployer) {
  deployer.deploy(access_control);
};
