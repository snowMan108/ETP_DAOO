var ETPTokenSale = artifacts.require("./ETPTokenSale.sol");
var ETPToken = artifacts.require("./ETPToken.sol");

contract('ETPTokenSale', function(accounts){
var tokenInstance;
var tokenSaleInstance;
var buyer = accounts[1];
var admin = accounts[0];
var tokenPrice = 240105691; // in wei
var numberOfETP;
   
    it('provide right values to contract', function(){
        return ETPTokenSale.deployed().then(function(instance){
            tokenSaleInstance = instance;
            return tokenSaleInstance.address
        }).then(function(address){
            assert.notEqual(address, 0x0, 'Has contract address');
            return tokenSaleInstance.tokenContract();
        }).then(function(address){
            assert.notEqual(address, 0x0, 'Has contract address');
            return tokenSaleInstance.tokenPrice();
        }).then(function(price){
            assert.equal(price, tokenPrice, 'token price is correct');
        });
    });


    it('makes it possible to by ETP', function(){
        return ETPToken.deployed().then(function(instance) {
            tokenInstance = instance;
            return ETPTokenSale.deployed();
          }).then(function(instance) {
            tokenSaleInstance = instance;
            return tokenInstance.transfer(tokenSaleInstance.address, tokensAvailable, { from: admin })
          }).then(function(receipt) {
            numberOfTokens = 10;
            return tokenSaleInstance.buyTokens(numberOfETP, { from: buyer, value: numberOfTokens * tokenPrice })
          }).then(function(receipt) {
            assert.equal(receipt.logs.length, 1, 'triggers one event');
            assert.equal(receipt.logs[0].event, 'Sell', 'should be the "Sell" event');
            assert.equal(receipt.logs[0].args._buyer, buyer, 'logs the account that purchased the tokens');
            assert.equal(receipt.logs[0].args._amount, numberOfTokens, 'logs the number of tokens purchased');
            return tokenSaleInstance.tokensSold();
          }).then(function(amount) {
            assert.equal(amount.toNumber(), numberOfETP, 'increments the number of tokens sold');
            return tokenInstance.balanceOf(buyer);
          }).then(function(balance) {
            assert.equal(balance.toNumber(), numberOfETP);
            return tokenInstance.balanceOf(tokenSaleInstance.address);
          }).then(function(balance) {
            assert.equal(balance.toNumber(), tokensAvailable - numberOfETP);
            return tokenSaleInstance.buyTokens(numberOfETP, { from: buyer, value: 1 });
          }).then(assert.fail).catch(function(error) {
            assert(error.message, "error message must contain revert");            
            return tokenSaleInstance.buyTokens(800000000000, { from: buyer, value: numberOfETP * tokenPrice })
          }).then(assert.fail).catch(function(error) {
            assert(error.message, "error message must contain revert");          
        });
        });

        it('ends token sale', function() {
            return ETPToken.deployed().then(function(instance) {
              // Grab token instance first
              tokenInstance = instance;
              return ETPTokenSale.deployed();
            }).then(function(instance) {
              // Then grab token sale instance
              tokenSaleInstance = instance;
              // Try to end sale from account other than the admin
              return tokenSaleInstance.endSale({ from: buyer });
            }).then(assert.fail).catch(function(error) {
                assert(error.message, "error message must contain revert");          
              // End sale as admin
              return tokenSaleInstance.endSale({ from: admin });
            }).then(function(receipt) {
              return tokenInstance.balanceOf(admin);
            });
          });
        });