require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
module.exports = {
solidity: "0.8.0",
paths: {
artifacts: './src/artifacts',
},
networks: {
hardhat: {
},
rinkeby: {
url: "https://rinkeby.infura.io/v3/118cba89153d4183b642300a6b27e3be",
accounts: [`0x${process.env.REACT_APP_PRIVATE_KEY}`]
}
}
};
