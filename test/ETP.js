var ETPToken = artifacts.require("./ETPToken.sol");
//var accounts = web3.eth.getAccounts().then(console.log);

contract('ETPToken', function(accounts){
it('sets total supply', function(){
    return ETPToken.deployed().then(function(instance){
        tokenInstance = instance;
        return tokenInstance.totalSupply();
    }).then(function(totalSupply){
        assert.equal(totalSupply.toNumber(), 100000000, 'Sets total supply to 100mil');
        assert.notEqual(totalSupply.toNumber(), 10000, 'Check when it is false');
        return tokenInstance.balanceOf(accounts[0]);
        });
    })

    it('Check balanceOf admin', function(){
        return ETPToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(function(adminBalance){
            assert.equal(adminBalance.toNumber(), 100000000, 'Initialsupply at admin');
            assert.notEqual(adminBalance.toNumber(), 100000, 'Check when it is false');
        });
    });

    it('Check name', function(){
        return ETPToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.name();
        }).then(function(name){
            assert.equal(name, "Educate The People", 'Sets name');
            assert.notEqual(name, "FALSE NAME HERE", 'Check when it is false');
        });
    });

    it('Check symbol', function(){
        return ETPToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.symbol();
        }).then(function(symbol){
            assert.equal(symbol, "ETP", 'Sets symbol');
            assert.notEqual(symbol, "FALSE SYMBOL HERE", 'Check when it is false');
        });
    });

    it('Check version', function(){
        return ETPToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.version();
        }).then(function(version){
            assert.equal(version, "ETP v1.0", 'Sets version');
            assert.notEqual(version, "FALSE VERSION HERE", 'Check when it is false');
        });
    });

    it('transfers token ownership', function()
    {
        return ETPToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.transfer.call(accounts[1], 9999999999999);
        }).then(assert.fail).catch(function(error){
            assert(error.message, "error message must contain revert");
            return tokenInstance.transfer.call(accounts[1], 250000, { from: accounts[0] });
        }).then(function(success) {
          assert.equal(success, true, 'it returns true');
          return tokenInstance.transfer(accounts[1], 25000000, { from: accounts[0] });
        }).then(function(receipt){
            assert.equal(receipt.logs.length, 2, 'triggers one event');
            assert.equal(receipt.logs[1].event, 'Transfer', 'should be the "Transfer" event');
            assert.equal(receipt.logs[1].args._from, accounts[0], 'logs the account the tokens are transferred from');
            assert.equal(receipt.logs[1].args._to, accounts[1], 'logs the account the tokens are transferred to');
            assert.equal(receipt.logs[1].args._value, 23750000, 'logs the transfer amount');
            return tokenInstance.balanceOf(accounts[1]);
        }).then(function(balance){
            assert.equal(balance.toNumber(), 23750000, 'adds the amount to receiver');
            return tokenInstance.balanceOf(accounts[0]);
        }).then(function(balance){
            assert.equal(balance.toNumber(), 75000000, 'deducts amount sender');
        });
    });

    it('approves tokens for delegated transfer', function(){
        return ETPToken.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.approve.call(accounts[1], 100);
        }).then(function(succes){
            assert.equal(succes, true, 'returns true')
            return tokenInstance.approve(accounts[1], 100, {from: accounts[0] });
        }).then(function(receipt){
            assert.equal(receipt.logs.length, 1, 'triggers one event');
            assert.equal(receipt.logs[0].event, 'Approval', 'should be the "Approval" event');
            assert.equal(receipt.logs[0].args._owner, accounts[0], 'logs the account the tokens are transferred from');
            assert.equal(receipt.logs[0].args._spender, accounts[1], 'logs the account the tokens are transferred to');
            assert.equal(receipt.logs[0].args._value, 100, 'logs the transfer amount');
            return tokenInstance.allowance(accounts[0], accounts[1]);
        }).then(function(allowance){
            assert.equal(allowance.toNumber(), 100, 'stores the allowance for delegated transfer');
        });
    });


    //BUG IN LOCAL TEST GANACHE
    // it('handles tokens for delegated transfer', function(){
    //     return ETPToken.deployed().then(function(instance){
    //     tokenInstance = instance;
    //     fromAccount = accounts[2];
    //     toAccount = accounts[3];
    //     spendingAccount = accounts[4];

    //     return tokenInstance.transfer(fromAccount, 100, { from: fromAccount[0]
    //     }).then(function(receipt){
    //         return tokenInstance.approve(spendingAccount, 10, {from: fromAccount});
    //     }).then(function(receipt){
    //         return tokenInstance.transferFrom(fromAccount, toAccount, 9999, { from: spendingAccount});
    //     }).then(assert.fail).catch(function(error){
    //         assert(error.message, "cannot transfer more then balance");
    //     return tokenInstance.transferFrom(fromAccount, toAccount, 20, { from: spendingAccount });
    //     }).then(assert.fail).catch(function(error){
    //     assert(error.message, "cannot transfer more then balance");
    //     return tokenInstance.transferFrom.call(fromAccount, toAccount, 10, { from: spendingAccount });
    // }).then(function(success){
    //     assert.equal(success, true)
    //     return tokenInstance.transferFrom.call(fromAccount, toAccount, 10, {from: spendingAccount});
    // }).then(function(receipt){
    //     assert.equal(receipt.logs.length, 1, 'triggers one event');
    //     assert.equal(receipt.logs[0].event, 'Approval', 'should be the "Approval" event');
    //     assert.equal(receipt.logs[0].args._owner, accounts[0], 'logs the account the tokens are transferred from');
    //     assert.equal(receipt.logs[0].args._spender, accounts[1], 'logs the account the tokens are transferred to');
    //     assert.equal(receipt.logs[0].args._value, 100, 'logs the transfer amount');
    //     return tokenInstance.balanceOf(fromAccount);
    // }).then(function(balance){
    //     assert.equal(balance.toNumber(), 90, 'deducts the amount from sending account');
    //     return tokenInstance.balanceOf(toAccount);
    // })  }).then(function(balance){
    //     assert.equal(balance.toNumber(), 90, 'adds the amount to the receiving account');
    //     return tokenInstance.allowance(fromAccount, spendingAccount);    
    // }).then(function(allowance){
    //     assert.equal(allowance, 0, 'deducts the ammount from the allowance');
    // });
    // });
});


