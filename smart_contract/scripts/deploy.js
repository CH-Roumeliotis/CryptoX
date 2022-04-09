const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  //const receipt = await transactionsContract.deployed();
  //const gasUsed = receipt.receipt.gasUsed;

  console.log("Transactions address: ", transactionsContract.address);
  //console.log("Gas fees: ", gasUsed);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();