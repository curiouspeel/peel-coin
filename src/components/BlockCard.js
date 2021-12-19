import '../BlockCard.css';
import React from 'react';

function BlockCard(props){

    let blockData = {
        Hash: props.hash,
        PreviousHash: props.previousHash,
        Timestamp: props.timestamp,
        Nonce: props.nonce,
        Data: props.data
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


    return(
        <div className="card">
            <h3 className="card-title">
                BLOCK {props.index}
            </h3>

            <ul>{blockInfo}</ul>
        </div>
    );
}

export default BlockCard;