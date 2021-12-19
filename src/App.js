import './App.css';
import React, {useState, useEffect} from 'react';
import { myBlockChain, Transaction } from './blockchain-script';
import BlockCard from './components/BlockCard';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

function App(props) {

  let [priCoin, setpriCoin] = useState(new myBlockChain());

  const [transactionList, setTransactionList] = useState([]);
  const [txInfo, setTxInfo] = useState({
    fromAddress:"",
    toAddress:"",
    amount:""
  });


  function handleChange(event) {
    const { name, value } = event.target;
    setTxInfo((prevState) => ({ ...prevState, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();

    priCoin.addTransaction(new Transaction(txInfo.fromAddress, txInfo.toAddress, txInfo.amount));
    priCoin.minePendingTransactions("miner's address");

    setTransactionList((prevTransaction) => [...prevTransaction, 
    txInfo]);

    setTxInfo(()=> ({
      fromAddress:"",
      toAddress:"",
      amount:""
    }));

    getLastItemFromChain();
  };

  const getLastItemFromChain = () =>{
    let block = priCoin.chain[priCoin.chain.length-1];
  }

  useEffect(() => {
    getLastItemFromChain();
  }, []);

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
                    data = {index === 0? block.transactions :block.transactions[0].amount}
                    hash = {block.hash}
                    previousHash = {block.previousHash}
                    nonce= {block.nonce}
                  />
                </div>
              ))}
        </div>
      </div>

      <AppFooter author={props.author}/>
    </div>
  );
}

export default App;
