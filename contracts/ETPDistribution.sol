pragma solidity 0.5.16;
//SPDX-License-Identifier: MIT

import "./ETPToken.sol";

contract ETPDistribution{
    address admin;
    ETPToken public tokenContract;
    
    constructor(ETPToken _tokenContract, uint256 _teamAmount, uint256 _devAmount, uint256 _ecoAmount, uint256 _liqAmount) public {
        admin = msg.sender;
        teamAmount = _teamAmount;
        devAmount = _devAmount;
        ecoAmount = _ecoAmount;
        liqAmount = _liqAmount;
        tokenContract = _tokenContract;
    }

    function distribute(uint256 _teamAmount, uint256 _devAmount, uint256 _ecoAmount, uint256 _liqAmount) public{
        tokenContract.transfer();
    }
}
