

let contractAddress_ETPToken = "0xEF3c391909Cd5eACB1833f334E308D16262E8E85"
let ABI_ETPToken = [{ "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_spender", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "succes", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "distributePayouts", "outputs": [{ "internalType": "bool", "name": "succes", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "feeCalculation", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "feeCollector", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "feeDivider", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "feePercentage", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxFeeAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "succes", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "ecoAddress", "type": "address" }], "name": "transferFee", "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "succes", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }];

let contractAddress_ETPTokenSale = "0xB197217de127a772d3C9C6a1fccfE7a00439E008";
let ABI_ETPTokenSale = [{ "inputs": [{ "internalType": "uint256", "name": "_rate", "type": "uint256" }, { "internalType": "address payable", "name": "_wallet", "type": "address" }, { "internalType": "contract IBEP20", "name": "_token", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "purchaser", "type": "address" }, { "indexed": true, "internalType": "address", "name": "beneficiary", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "TokensPurchased", "type": "event" }, { "inputs": [], "name": "PauseSale", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "buyTokens", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "presaleEnded", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IBEP20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tokenSold", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_rate", "type": "uint256" }], "name": "updateRate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "wallet", "outputs": [{ "internalType": "address payable", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "weiRaised", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];

var tokenInstance;
var saleInstance;
var userAddress;
var chainId;
var tokenPrice = 240105691;

const initialize = async () => {
  if (typeof window.ethereum !== 'undefined') {
    console.log("Wallet Connected");
    // await connectWallet();
  } else {
    alert("Please Use Dapp browser!")
  }

  async function connectWallet() {

    var web3 = new Web3(Web3.givenProvider);
    await Web3.givenProvider.enable();

    await ethereum.request({ method: 'eth_requestAccounts' })
      .then(async (res) => {
        chainId = await web3.eth.getChainId();

        if (chainId == "3") {
          userAddress = res[0];
          tokenInstance = new web3.eth.Contract(ABI_ETPToken, contractAddress_ETPToken);
          saleInstance = new web3.eth.Contract(ABI_ETPTokenSale, contractAddress_ETPTokenSale);
        } else {
          alert("you need to connect ropsten network")
        }
      });
  }

  $("#buy").click(async () => {
    await connectWallet();

    let inputValue = $('#amount').val();
    let input = ethers.utils.parseEther(inputValue).toString();
    console.log(input);

    let cal = await calcTokens(inputValue);
    console.log(cal)

    await tokenInstance.methods.approve(contractAddress_ETPTokenSale, cal).send({ from: userAddress }).then(async (res) => {
      console.log(res);
      await saleInstance.methods.buyTokens().send({
        from: userAddress,
        value: input
      }).then((res) => {
        console.log('this is final result:', res);
      })
    })
  })


  async function calcTokens(token) {
    let calc = tokenPrice * token;
    let res = calc * 1e9;
    return res.toString();
  }

};
window.addEventListener('DOMContentLoaded', initialize);





