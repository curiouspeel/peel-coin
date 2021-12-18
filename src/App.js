import React, {useState} from 'react';
import './App.css';
import BlockCard from './components/BlockCard';
import { myBlockChain } from './blockchain-script';
import { Transaction } from './blockchain-script';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

function App(props) {

  let priCoin = new myBlockChain();

  const [txInfo, setTxInfo] = useState({fromAddress:"", toAddress:"", amount:""});
  const [transactionList, setTransactionList] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setTxInfo((prevState) => ({ ...prevState, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    setTransactionList((prevTransaction) => [...prevTransaction, txInfo]);
  };

  // const transactions = transactionList.map((tx, index) =>
  // (<p key={index}>
  //   {tx.fromAddress} {tx.toAddress} {tx.amount}
  // </p>));

  const transactions = transactionList.map((tx, index) =>{
    priCoin.addTransaction(new Transaction(tx.fromAddress, tx.toAddress, tx.amount));
    priCoin.minePendingTransactions("address1");
    return (<p key={index}>
      {tx.fromAddress} {tx.toAddress} {tx.amount}
    </p>);
  }
  );


  return (
    <div className="App">
      <AppHeader/>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="From address"
          name="fromAddress"
          value={txInfo.fromAddress}
          onChange={handleChange}
          required
        />
        <input
          placeholder="To address"
          name="toAddress"
          value={txInfo.toAddress}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Amount"
          name="amount"
          value={txInfo.amount}
          onChange={handleChange}
          required
        />
        <input type="submit" value="Make Transaction" />
      </form>

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
      {transactions}
      <AppFooter author={props.author}/>
    </div>
  );
}

export default App;
