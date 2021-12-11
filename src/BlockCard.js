import './BlockCard.css';
import React from 'react';
// import { myBlock } from './blockchain-script';

function BlockCard(props){

    // let block = new myBlock();

    return(
        <div className="card">
            <h3>
                BLOCK {props.index}
            </h3>
            
            <ul>
            <li>Timsestamp: {props.timestamp}</li>
            <li>Data: {props.data}</li>
            <li>Hash: {props.hash}</li>
            <li>Previous hash: {props.previousHash}</li>
            </ul>

            
        </div>
    );
}

export default BlockCard;