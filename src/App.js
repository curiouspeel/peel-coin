import React, {useState} from 'react';
import './App.css';
import BlockCard from './components/BlockCard';
import { myBlockChain } from './blockchain-script';
import { Transaction } from './blockchain-script';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

function App(props) {

  let priCoin = new myBlockChain();

  const [data, setData] = useState('');

  let txList = [];

  const childToParent = (childData) =>{
    setData(childData);
    // console.log(data);
    txList.push(data);
  }

  // let flag=0;
  // if(data !==''){
  //   console.log("data updated");
  //   console.log(data);
  //   let from= data.fromAddress;
  //   let to = data.toAddress;
  //   let amt = data.amount;
  //   console.log(from +" "+to+" "+amt);
  //   flag=1;
  // }

 
  // if(flag === 1){
  //   priCoin.addTransaction(new Transaction(data.fromAddress, data.toAddress, data.amount));
  //   priCoin.minePendingTransactions('address2');
  // }

  // console.log("Mining pending transactions... ");

  priCoin.addTransaction(new Transaction('address1', 'address2', 56));
  console.log("Mining pending transactions... ");
  priCoin.minePendingTransactions('address2');


  // console.log(priCoin);

  return (
    <div className="App">
      <AppHeader childToParent={childToParent}/>

      <div className="App-content"> 
        <h2>Blocks on chain: </h2>
        <div className="card-container">
            {priCoin.chain.map((block,index) =>(
                <div key={index}>
                  <BlockCard
                    index = {index+1}
                    timestamp = {block.timestamp}
                    data = {0}
                    hash = {block.hash}
                    previousHash = {block.previousHash}
                    nonce= {block.nonce}
                  />
                </div>
              ))}
        </div>

        {/* <p>{data.fromAddress} {data.toAddress} {data.amount}</p> */}
        {/* {txList.length} */}
      </div>

      <AppFooter author={props.author}/>
    </div>
  );
}

export default App;
