require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remain modify include arctic bone slush'; 
let testAccounts = [
"0x4aff178a6fc35c635d63d025f935499aff8e994d23f79ef1b169331addceaf24",
"0x5c471f2ab19f27cb1f68ff8631076c1f645cb47d919ee961074eb9fda34b1aaf",
"0xaee8c150ae4e71a7df12d79d3b11cfb49d47310a3e2eb439d352f20b3e494c8b",
"0xea0f9495992a388927b48332c17ae7e9399390a81377776f1c21ca885b31095c",
"0xdd20828e0e13a615a4d8c667cf0906363fbaa966702776e2ae3b288e368ce6eb",
"0x2d1ed2291b9fd9b6dbcc137cda6e5d00eeba896ee953503e964bb75fc6984a77",
"0xb06cde79cbcbb1f9c1d3837ee777da8ca0d0e194d991b5e78ceddd2069df16df",
"0x03df7dd0fb9520a00a5c8ee94babb17de407ac44ec8df62a746a191099e43744",
"0xef4a9238c391c71bb2871800ba6ae311f3f4daaf46ecab707268a8c5edb23f23",
"0x729d933278082b7c660a6f23dd5b68ab7e89276b2e240d11fea09161ccd61d59"
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


