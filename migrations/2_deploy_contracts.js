const ETPToken = artifacts.require("./ETPToken.sol");
const ETPTokenSale = artifacts.require("./ETPTokenSale.sol");

module.exports = function (deployer) {
  deployer.deploy(ETPToken, 100000000).then(function(){
    return deployer.deploy(ETPTokenSale, ETPToken.address);
  });
}

