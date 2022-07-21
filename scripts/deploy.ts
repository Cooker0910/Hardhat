import { ethers } from "hardhat";

async function main() {

  const Rewards = await ethers.getContractFactory("Rewards");
  const Rewards1 = await ethers.getContractFactory("Rewards");
  const rewards = await Rewards.deploy("0x9621b905e786556ec1879ac6bc730e617b35e4f0", "0x0000000000000000000000000000000000000000");
  const rewards1 = await Rewards1.deploy("0x9621b905e786556ec1879ac6bc730e617b35e4f0", "0x33EAB63595798963979ea1E3c0f21DdF55e43916");
  await rewards.deployed();
  await rewards1.deployed();
  console.log("rewards", rewards.address);
  console.log("rewards1", rewards1.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error, 'err');
  process.exitCode = 1;
});
