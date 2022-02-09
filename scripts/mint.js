const { ethers } = require('hardhat');
const fs = require('fs');

async function mint() {
    const [signer] = await ethers.getSigners();
    let file = fs.readFileSync('../artifacts/contracts/Fairuz.sol/Fairuz.json');
    let abi = JSON.parse(file);
    abi = abi.abi;
    const fairuz = await new ethers.Contract(
        "0x0b10eb97bcad9cf117053550b529e75c19e57b32",
        abi,
        signer);
    await fairuz.safeMint("0x44b606F8B35dDb417A18200fc58948b8950D5d16",
        "https://gateway.pinata.cloud/ipfs/QmQPpVJTetLvMUx94u5PtHAHXbwHDWYLu4X1ZukAKyjS1u/1.json"
    );
    console.log("minted!")
}

mint()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });