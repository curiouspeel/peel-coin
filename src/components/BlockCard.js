import '../BlockCard.css';
import React from 'react';
// import { myBlock } from './blockchain-script';

function BlockCard(props){

    // let block = new myBlock();

    let blockData = {
        Hash: props.hash,
        PreviousHash: props.previousHash,
        Timestamp: props.timestamp,
        Nonce: props.nonce
    };

    let keys = Object.keys(blockData);
    let values = Object.values(blockData);

    let blockInfo = values.map((value,index) =>
        <li key={keys[index]}>
            <strong>{keys[index]}:</strong>
            <br/>
            {value}
        </li>
    );


    // console.log(blockInfo);

    return(
        <div className="card">
            <h3 className="card-title">
                BLOCK {props.index}
            </h3>

            <ul>{blockInfo}</ul>

            {/* <div className="card-info">
                <ul>
                    <li><strong>Hash:</strong>
                        <br/>
                        {props.hash}
                    </li>
                    <li><strong>Hash of previous block:</strong> 
                        <br/>
                        {props.previousHash}
                    </li>
                </ul>
            </div>
                
            <div className="card-info">
                <ul>
                    <li><strong>Timsestamp: </strong>
                        <br/>
                        {props.timestamp}
                    </li>
                    <li><strong>Nonce:</strong> 
                        <br/>
                        {props.nonce}
                    </li>
                </ul>
            </div> */}
        </div>
    );
}

export default BlockCard;