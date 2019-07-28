export const supportedExplorers = { Etherscan: (net, type, hash) => {
    return "https://" + (net === "mainnet" ? "" : net + ".") + "etherscan.io/" + type + "/" + hash;
}, Blockscout: (net, type, hash) => {
    return "https://blockscout.com/eth/" + net + "/" + type + "/" + hash;
} }

export const netNames = {"mainnet": "Mainnet", "rinkeby": "Rinkeby", "ropsten": "Ropsten", "goerli": "Goerli", "kovan": "Kovan" }

export const typeNames = {"tx": "Transaction", "address": "Address", "block": "Block", "token": "Token"}