import React, {useState} from 'react';
import './App.css';
import BlockCard from './components/BlockCard';
import { myBlockChain } from './blockchain-script';
import { Transaction } from './blockchain-script';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

function App(props) {

  let priCoin = new myBlockChain();
  // let allTransactions =[];

  // const [data, setData] = useState({fromAddress:"", toAddress:"", amount:""});
  const [data, setData] = useState([]);
  
  let txCount=3;
  const childToParent = (childData) =>{
    setData(childData);
    // console.log(data);

    // counter = count;
    // console.log(count +" "+ childData+" "+counter);
    // console.log(counter +" "+ counter%txCount);
  }

  if(data.length>0 && (data.length%txCount === 0)){
    console.log("entered if");
    console.log(data);

    for(let itr=0; itr<txCount; itr++){
      priCoin.addTransaction(new Transaction(data[itr].fromAddress, data[itr].toAddress, data[itr].amount));
    }
    // priCoin.addTransaction(new Transaction('address1', 'address2', 10));
    console.log("Mining pending transactions... ");
    priCoin.minePendingTransactions('address2');

    for(let j=0; j<1; j++){
      priCoin.addTransaction(new Transaction('address1', 'address2', 56));
      console.log("Mining pending transactions... ");
      priCoin.minePendingTransactions('address2');
    }
  }

  // ISSUE !!! BLOCK DISAPPEARS ON EXITING IF

  // for(let j=0; j<5; j++){
  //   priCoin.addTransaction(new Transaction('address1', 'address2', 56));
  //   console.log("Mining pending transactions... ");
  //   priCoin.minePendingTransactions('address2');
  // }

  // priCoin.addTransaction(new Transaction('address1', 'address2', 56));
  // console.log("Mining pending transactions... ");
  // priCoin.minePendingTransactions('address2');

  console.log(priCoin);

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
      </div>
      {/* {data.fromAddress} {data.toAddress} {data.amount} */}
      <AppFooter author={props.author}/>
    </div>
  );
}

export default App;
