import fs from 'fs'
import { ethers } from 'hardhat'

const main = async () => {
  const [singer] = await ethers.getSigners()
  const contractFactory = await ethers.getContractFactory('contracts/Contract/main.sol:Contract')
  const contract = await contractFactory.connect(singer).deploy()
  fs.writeFileSync('address/contract', contract.address)
  await contract.deployed()
}

main()
  .then()
  .catch((error) => { console.error(error) })
