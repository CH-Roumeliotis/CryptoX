// https://eth-ropsten.alchemyapi.io/v2/TAiGT6jQ9-gBMOnQ56CZf_TQhFGjuWgz

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.5',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/TAiGT6jQ9-gBMOnQ56CZf_TQhFGjuWgz',
      accounts: ['f7263e782ed4aeec893052cb53469df47f2ab8a586339863c2b59276ade49dcf']
    }
  }
}