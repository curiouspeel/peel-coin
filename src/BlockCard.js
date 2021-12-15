import './BlockCard.css';
import React from 'react';
// import { myBlock } from './blockchain-script';

function BlockCard(props){

    // let block = new myBlock();

    return(
        <div className="card">
            <h3 className="card-title">
                BLOCK {props.index}
            </h3>

            <div className="card-info">
                <ul>
                    <li><strong>Hash:</strong> 
                        <li>{props.hash}</li>
                    </li>
                    <li><strong>Hash of previous block:</strong> 
                        <li>{props.previousHash}</li>
                    </li>
                </ul>
            </div>
                
            <div className="card-info">
                <ul>
                    <li><strong>Timsestamp: </strong>
                        <li>{props.timestamp}</li>
                    </li>
                    <li><strong>Data:</strong> 
                        <li>{props.data}</li>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BlockCard;