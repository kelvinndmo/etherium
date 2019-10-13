const Web3 = require('web3');

const rpcURL = 'https://mainnet.infura.io/v3/938a148413fe4ac681dd510bba40d2f5';

const web3 = new Web3(rpcURL);
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

const account = '0x90e63c3d53E0Ea496845b7a03ec7548B70014A91';

const getBlock = async () => {
  const block = await web3.eth.getBlock('latest');
  return block;
};

app.get('/latest', async (req, res) => {
  const result = await web3.eth.getBlock('latest');
  res.send(result);
});

app.get('/block/:hash', (req, res) => {
  web3.eth.getBlock(req.params.hash).then(data => {
    res.send(data);
  });
});

app.get('/transacations', async (req, res) => {
  let list = [];
  let transactions = [];
  let block = await getBlock();
  // .then(block => {
  // await block.transactions.forEach(data => {
  //   const transcation = await web3.eth.getTransaction(data);
  //   transactions.push(transcation);
  // });

  for (let i = 0; i < block.transactions.length; i++) {
    const transcation = await web3.eth.getTransaction(block.transactions[i]);
    transactions.push(transcation);
  }
  // });
  transactions.forEach(trans => {});
  return res.send(transactions);
});

app.get('/latest10blocks', async (req, res) => {
  let list = [];
  let latest = await web3.eth.getBlockNumber();

  for (let i = 0; i < 17; i++) {
    let block = await web3.eth.getBlock(latest - i);
    list.push(block);
  }

  return res.send(list);
});

app.listen(port, () => {
  console.log('Server is running on ' + port);
});
