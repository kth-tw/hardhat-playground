import fs from 'fs'
import { ethers } from 'hardhat'

const main = async () => {
  const [owner] = await ethers.getSigners()

  const contract = await ethers.getContractAt('contracts/Contract/main.sol:Contract', fs.readFileSync('address/contract').toString())

  console.log(`value: ${await contract.getValue()}`)

  await (await contract.connect(owner).setValue(1000)).wait()

  console.log(`value: ${await contract.getValue()}`)
}

main()
  .then()
  .catch((error) => { console.error(error) })
