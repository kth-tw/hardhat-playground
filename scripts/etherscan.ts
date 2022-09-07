import fs from 'fs'
import hardhat from 'hardhat'

const main = async () => {
  try {
    await hardhat.run('verify:verify', {
      address: fs.readFileSync('address/contract').toString(),
      constructorArguments: [],
      contract: 'contracts/Contract/main.sol:Contract',
    })
  } catch (e) {
    console.log(e)
  }

  try {
    await hardhat.run('verify:verify', {
      address: fs.readFileSync('address/token').toString(),
      constructorArguments: [1000000, 't'],
      contract: 'contracts/TestToken/main.sol:TestToken',
    })
  } catch (e) {
    console.log(e)
  }
}

main()
  .then()
  .catch((error) => { console.error(error) })
