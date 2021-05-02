const assert = require("assert");

const VoteToken = artifacts.require("VoteToken");

contract("VoteToken", (accounts) => {
  before(async () => {
    this.voteToken = await VoteToken.deployed();
  });

  it("Sets total supply", async () => {
    const totalSupply = await this.voteToken.totalSupply();

    assert.strictEqual(totalSupply.toNumber(), 500000000);
  });
});