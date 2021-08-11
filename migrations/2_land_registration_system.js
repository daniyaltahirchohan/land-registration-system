const LandRegistrationContract = artifacts.require("LandRegistrationContract");

module.exports = function (deployer) {
  deployer.deploy(LandRegistrationContract,1111111,'Creator','Sialkot');
};
