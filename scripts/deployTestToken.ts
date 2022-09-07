import fs from 'fs'
import { ethers } from 'hardhat'

const main = async () => {
  const [tokenIssuer] = await ethers.getSigners()
  const testTokenFactory = await ethers.getContractFactory('contracts/TestToken/main.sol:TestToken')
  const token = await testTokenFactory.connect(tokenIssuer).deploy(1000000, 't')
  fs.writeFileSync('address/token', token.address)
  await token.deployed()
}

main()
  .then()
  .catch((error) => { console.error(error) })
