require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign struggle cost rifle uncle hope clinic slot gift'; 
let testAccounts = [
"0x7aa6cda208415332a32357e1eb04f7f3f778d15ae6fee63fd871ed2ea484758b",
"0x8e06f6255475925323ddfe674d24a5a9c21e6030d1a57e9fab46134535d6b7ba",
"0x9b74d150cf018f933657d280b3b97fc473ffbc221a1f923a4f76ac0d31cfc34d",
"0x1e0017d4f4f26af9adb031a12c2f744e09aee9d057bc7e6a533abc3e65848fbb",
"0x4222296fab722059ac9f2d76c962ab679ef8d7a37eca402d02ecf4ec96780364",
"0x090f329ae8ff476973a39c122c0b0c42b1801e43c39f08fe4aad67bf213018f8",
"0xf702e0f90143e4e235c4d939dfc625baec66c557d3845afff3799baf21fc2984",
"0xad31ded1b7784b5d3540317d8602ce82ce13e686c51e5daffa3bd371a8e3de64",
"0x10fd3b6f86fad7f3a0da835d0635bf5ad8836ae589fc38723d5147520ac10467",
"0xdd3c592d8abfe1736bf3581004507029778c16daa925aeab51a699a49be23fd0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


