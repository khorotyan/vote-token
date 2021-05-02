1. Compile truffle:
truffle compile

2. Test truffle
truffle test

3. Migrate truffle:
truffle migrate --reset

4. Generate Abi file
solcjs filename.sol --abi

5. Check with truffle console:

-> truffle console

-> Get token: token = await VoteToken.deployed()
-> Get address: token.address
-> Get total supply: totalSupply = await token.totalSupply()
-> Convert total supply to number: totalSupply.toNumber()