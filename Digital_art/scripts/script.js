async function main() {
  const SynthNFT = await hre.ethers.getContractFactory("SynthNFT");
  const SynthNFT = await MyCryptoLions.deploy();

  await SynthNFT.deployed();

  console.log("MyCryptoLions deployed to:", SynthNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });