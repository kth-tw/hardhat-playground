import fs from 'fs'
import { HardhatUserConfig } from 'hardhat/config'
// hardhat plugin
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'

const settingJson = JSON.parse(fs.readFileSync('hardhat.setting.json').toString())

export default {
  solidity: '0.8.12',
  networks: {
    hardhat: {
    },
    rinkeby: {
      chainId: 4,
      url: `https://eth-rinkeby.alchemyapi.io/v2/${settingJson.rinkeby.alchemy_api_key}`,
      accounts: {
        mnemonic: settingJson.rinkeby.mnemonic,
      },
    },
  },
  etherscan: {
    apiKey: settingJson.etherscanApiKey,
  },
} as HardhatUserConfig
