require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    etherium: {
      url: process.env.ETHERIUM_URL,
      accounts: [process.env.WALLET_PRIVATE_KEY]
    }
  }
};
