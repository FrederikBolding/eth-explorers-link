export const supportedExplorers = { Etherscan: (net, type, hash) => {
    return "https://" + (net === "mainnet" ? "" : net + ".") + "etherscan.io/" + type + "/" + hash;
}, Blockscout: (net, type, hash) => {
    return "https://blockscout.com/eth/" + net + "/" + type + "/" + hash;
} }

export const validTypes = ["tx", "address", "block", "token"]
