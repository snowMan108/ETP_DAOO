pragma solidity 0.5.16;
//SPDX-License-Identifier: MIT

import "./ETPToken.sol";

contract ETPTokenSale{
    address payable admin;
    ETPToken public tokenContract;
    uint256 public tokenPrice = 240105691;
    uint256 public tokenSold;
    uint256 public tokenSaleAmount = 2000000;

    event Sell(address _buyer, uint256 _amount);

    constructor(ETPToken _tokenContract) public {
        admin = msg.sender;
        tokenContract = _tokenContract;
    }

    function multiply(uint x, uint y) internal pure returns(uint z){
        require(y == 0 || (z = x * y) / y == x);
    }

    function buyETP(uint256 _numberOfETP) public payable{
        require(tokenSold <= tokenSaleAmount);
        require(msg.value == multiply(_numberOfETP, tokenPrice));
        require(tokenContract.balanceOf(address(this)) >= _numberOfETP);
        require(tokenContract.transfer(msg.sender, _numberOfETP));
        tokenSold += _numberOfETP;
        emit Sell(msg.sender, _numberOfETP);
    }

    function endSale() public{
        require(msg.sender == admin);
        require(tokenContract.transfer(admin, tokenContract.balanceOf(address(this))));
        selfdestruct(admin);
    }

}