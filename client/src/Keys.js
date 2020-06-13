import React from 'react'
import styled from 'styled-components'
// import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
// import NewUserPage from './NewUserPage'
// import Home from './Home'

import bitcore from 'bitcore-lib'
import hdkey from 'hdkey'
import QRCode from 'qrcode'
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

class Keys extends React.Component{
	constructor(){
		super()
		this.state = {
			secretSeed: '',
			mnemonic: '[]',
		}
	}

	generateSeed = () => {
		// var secretSeed = lightwallet.keystore.generateRandomSeed();
		// const secretSeed = new bitcore.PrivateKey()
		// this.setState({ secretSeed })
	}

	componentDidMount(){
		this.runSeedGenerator()
	}

	runSeedGenerator = async () => {
		const mnemonic = bip.generateMnemonic(); //generates string
		const seed = await bip.mnemonicToSeed(mnemonic); //creates seed buffer
		const root = hdkey.fromMasterSeed(seed);
	
        const masterPrivateKey = root.privateKey.toString('hex')
        // m / purpose' / coin_type' / account' / change / address_index
        // purpose is 42 because it does not follow the bip 44 specifications 
        // coin_type is domain heatlh | personal | cache 
        // account is catagory | medications | vitals | diagonosis 
        // change is sub-catagory HR | OxSat | Weight 
        // index is sequential and 
		const addrNode = root.derive("m/42'/60'/0'/0/0"); //line 1

		const pubKey = ethUtil.privateToPublic(addrNode._privateKey);
		const addr = ethUtil.publicToAddress(pubKey).toString('hex');
		// const address = ethUtil.toChecksumAddress(addr);
	
		const qrCode = QRCode.toDataURL(mnemonic)
			.then(qrCode => {
				console.log(qrCode)
				// return qrCode
				this.setState({ qrCode })
			})
			.catch(err => {
				console.error(err)
			})

		this.setState({
			mnemonic,
			seed,
			root,
			masterPrivateKey,
			addrNode,
			pubKey,
			addr,
			qrCode
		})
		console.log("mnemonic", mnemonic)
		console.log("seed", seed)
		console.log("root", root)
		console.log("masterPrivateKey", masterPrivateKey)
		console.log("addrNode", addrNode)
		console.log("pubKey", pubKey)
		console.log("addr", addr)
	}

	saveMenomicLocaly = () => {
		const { 
			mnemonic,
		} = this.state
		localStorage.setItem("mnemonic", mnemonic)
	}

	loadLocalKey = () => {
		const mnemonic = localStorage.getItem("mnemonic")
		this.setState({ mnemonic })
	}

  	render(){
		const { 
			mnemonic,
			seed,
			root,
			masterPrivateKey,
			addrNode,
			pubKey,
			addr,
			qrCode,
		} = this.state

		console.log("qrCode", qrCode)
		 
		return (
			<KeysDiv>
				<p>mnemonic: {mnemonic} </p>
				{/* <p>seed: {seed} </p>
				<p>root: {root} </p> */}
				<button onClick={this.runSeedGenerator}>New Key</button>
				<button onClick={this.loadLocalKey}>Load Last Key</button>
				<button onClick={this.saveMenomicLocaly}>Save Private Key</button>
				<label>Master Key</label>
				<img src={qrCode} />
			</KeysDiv>
		);
	}
}

export default Keys

const KeysDiv = styled.div`
    /* border: 1px solid red; */
    box-sizing: border-box;
    max-width: 100vw;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
`
