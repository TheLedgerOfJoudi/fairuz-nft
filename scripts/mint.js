const { ethers } = require('hardhat');
const fs = require('fs');

async function mint() {
    const [signer] = await ethers.getSigners();
    let file = fs.readFileSync('../artifacts/contracts/Fairuz.sol/Fairuz.json');
    let abi = JSON.parse(file);
    abi = abi.abi;
    const fairuz = await new ethers.Contract(
        "0x7994A2cd8C290dF0D6651Ce11f8c58A4889fb3AB",
        abi,
        signer);
    await fairuz.safeMint("0x44b606F8B35dDb417A18200fc58948b8950D5d16",
        "https://gateway.pinata.cloud/ipfs/QmT3xkBwpBLHbvYyC3n8Epoht66WM1XFYV9B1sNNYq4Z7G"
    );
}

mint()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });