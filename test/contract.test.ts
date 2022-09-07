/* global describe, it, beforeEach */
import assert from 'assert'
import { ethers } from 'hardhat'
import { Contract, Signer } from 'ethers'

describe('smart contract: Contract', () => {
  let owner: Signer, user: Signer
  let contract: Contract

  beforeEach(async () => {
    const contractFactory = await ethers.getContractFactory('contracts/Contract/main.sol:Contract')
    owner = (await ethers.getSigners())[0]
    user = (await ethers.getSigners())[1]
    contract = await contractFactory.connect(owner).deploy()
    await contract.deployed()
  })

  describe('constructor', () => {
    it('should set owner', async () => {
      assert.deepStrictEqual(await contract._owner(), await owner.getAddress())
    })
  })

  describe('setValue', () => {
    it('should set value', async () => {
      await contract.connect(owner).setValue(9527)
      assert.equal(await contract._value(), 9527)
    })

    it('should revert if not called by owner', async () => {
      await assert.rejects(contract.connect(user).setValue(9527), /reverted with reason string 'This function can be called by owner only'/)
    })
  })

  describe('getValue', () => {
    beforeEach(async () => {
      await (await contract.connect(owner).setValue(9527)).wait()
    })
    it('should get value', async () => {
      assert.equal(await contract.connect(owner).getValue(), 9527)
    })
  })
})
