import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'CryptoCroakers',
  tokenName: 'Crypto Croakers',
  tokenSymbol: 'CRK',
  hiddenMetadataUri: 'ipfs://Qmdyw8cBeUnNsyb9JBSqs6666XQJcP7E9JYFSgLPtmg2MW/hidden.json',
  maxSupply: 50,
  whitelistSale: {
    price: 0.0005,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.0007,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.001,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xC515362B1875304d6E40cF9CbF7475A7522Ea930",
  marketplaceIdentifier: 'CryptoCroakers',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
