const {ethers} = require('hardhat')

async function main() {
    const [deployer] = await ethers.getSigners();
    const Fairuz = await ethers.getContractFactory('Fairuz');
    const fairuz = await Fairuz.deploy();
    console.log("Deployed to " + fairuz.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });