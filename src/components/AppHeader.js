import '../App.css'
import React, {useState} from 'react';

function AppHeader({childToParent}) {

    // const [count, setCount] = useState(0);
    // const [txInfo, setTxInfo] = useState({fromAddress:"", toAddress:"", amount:""});
    // const [transactionList, setTransactionList] = useState([]);

    // function handleChange(event){
    //     const {name, value} = event.target;
    //     setTxInfo((prevState) => ({...prevState, [name]:value}));
    // } 
    // function handleSubmit(event){
    //     event.preventDefault();
    //     setTransactionList((prevTransaction) => [...prevTransaction, txInfo]);
    //     setCount(count+1);
    //     // console.log(transactionList[count-1].amount)
    //     childToParent(transactionList);
    // };

    // const transactions = transactionList.map((tx, index) => 
    // (<p key={index}>
    //     {tx.fromAddress} {tx.toAddress} {tx.amount}
    // </p>));

    return (
        <div>
            <header className="App-header">
                <h1>Peel-Coin</h1>
            </header>


            {/* <form onSubmit={handleSubmit}>
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
                <input type="submit" value="Make Transaction"/>
            </form> */}
            {/* {transactions}
            <p>Pending transactions = {count}</p> */}
        </div>
    );
}

export default AppHeader;