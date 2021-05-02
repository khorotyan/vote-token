const VoteToken = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(VoteToken);
};
