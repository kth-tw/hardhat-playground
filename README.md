# Hardhat Playground

## develop environment

### prepare test network

1. install npm package

```bash
npm i
```

1. set public testnet

```bash
cp setting.example.json setting.json
```

and edit `setting.json`

1. start hardhat network

```bash
npx hardhat node
```

the test account of hardhat network is create by mnemonic `test test test test test test test test test test test junk`

### deploy to localhost testnet

1. compile

```bash
rm -rf artifacts
npx hardhat compile
```

1. deploy test token

```bash
npx hardhat run --network localhost scripts/deployTestToken.ts
```

1. deploy contract

```bash
npx hardhat run --network localhost scripts/deployContract.ts
```

1. test transaction

```bash
npx hardhat run --network localhost scripts/testTransaction.ts
```

### deploy to public testnet

1. compile

```bash
rm -rf artifacts
npx hardhat compile
```

1. deploy test token

```bash
npx hardhat run --network rinkeby scripts/deployTestToken.ts
```

1. deploy contract

```bash
npx hardhat run --network rinkeby scripts/deployContract.ts
```

1. upload to etherscan and verify

```bash
npx hardhat run --network rinkeby scripts/etherscan.ts
```

1. test transaction

```bash
npx hardhat run --network rinkeby scripts/testTransaction.ts
```

### Unit test

```bash
npx hardhat test
```
