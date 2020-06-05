import React from 'react'
import styled from 'styled-components'
// import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
// import NewUserPage from './NewUserPage'
// import Home from './Home'

import bitcore from 'bitcore-lib'
import hdkey from 'hdkey'
const ethUtil = require('ethereumjs-util')
const bip = require('bip39')

// const privateKey = new bitcore.PrivateKey()
// console.log('privateKey', privateKey)
// const address = privateKey.toAddress()
// console.log('address', address)

// const HDPrivateKey = bitcore.HDPrivateKey

// const hdPrivateKey = new HDPrivateKey()
// const derivedByNumber = hdPrivateKey.deriveChild(1).deriveChild(2, true)
// const derivedByArgument = hdPrivateKey.deriveChild("m/1/2'")
// console.log("hdPrivateKey", hdPrivateKey)
// console.log("derivedByNumber", derivedByNumber)
// console.log("derivedByArgument", derivedByArgument)

// obtain HDPublicKey
// var hdPublicKey = hdPrivateKey.hdPublicKey
// const mnemonic = bip39.generateMnemonic()
const runSeedGenerator = async () => {
	const mnemonic = bip.generateMnemonic(); //generates string
	const seed = await bip.mnemonicToSeed(mnemonic); //creates seed buffer

	const root = hdkey.fromMasterSeed(seed);
	const masterPrivateKey = root.privateKey.toString('hex')

	const addrNode = root.derive("m/44'/60'/0'/0/0"); //line 1
	const pubKey = ethUtil.privateToPublic(addrNode._privateKey);
	const addr = ethUtil.publicToAddress(pubKey).toString('hex');
	// const address = ethUtil.toChecksumAddress(addr);

	console.log("mnemonic", mnemonic)
	console.log("seed", seed)
	console.log("root", root)
	console.log("masterPrivateKey", masterPrivateKey)
	console.log("addrNode", addrNode)
	console.log("pubKey", pubKey)
	console.log("addr", addr)
	// console.log("address", address)

}
runSeedGenerator()
class App extends React.Component{
	constructor(){
		super()
		this.state = {
			secretSeed: '',
		}
	}

	generateSeed = () => {
		// var secretSeed = lightwallet.keystore.generateRandomSeed();
		const secretSeed = new bitcore.PrivateKey()
		this.setState({ secretSeed })
	}

  	render(){
		const { secretSeed } = this.state
     	 return (
			<AppDiv>
				{/* <p>hdPrivateKey: {hdPrivateKey} </p> */}
				{/* <p>derivedByNumber: {derivedByNumber} </p> */}
				{/* <p>derivedByArgument: {derivedByArgument} </p> */}
			</AppDiv>
		);
	}
}

export default withRouter(App)

const AppDiv = styled.div`
    /* border: 1px solid red; */
    box-sizing: border-box;
    max-width: 100vw;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    .data {
		/* border: 1px solid blue; */
		display: flex;
		width: 95%;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
		.top {
			/* border: 1px solid green; */
			/* max-width: 100%; */
			box-sizing: border-box;
			width: 100%;
			display: flex;
			flex-direction: row;
		}
	}
`
