import './App.css';
import BlockCard from './BlockCard';
import { myBlock } from './blockchain-script';
import { myBlockChain } from './blockchain-script';

function App(props) {

  // create blockchain
  let priCoin = new myBlockChain();

  // create blocks
  priCoin.addBlock(new myBlock(1, "26/09/2021", "test-data-1"));
  priCoin.addBlock(new myBlock(2, "22/11/2021", "test-data-2"));
  // priCoin.addBlock(new myBlock(3, "13/12/2021", "test-data-3"));

  console.log(priCoin);

  console.log(props);
  const author = props.author;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Peel-Coin</h1>
      </header>

      <div className="App-content"> 
        <h2>Blocks on chain: </h2>
        <div className="card-container">
        {priCoin.chain.map(block =>(
            <div>
              <BlockCard
                index = {block.index}
                timestamp = {block.timestamp}
                data = {block.data}
                hash = {block.hash}
                previousHash = {block.previousHash}
              />
              </div>
          ))}

        </div>

          
      </div>

      <footer className="App-footer">
        <p>&copy; {author}</p>
      </footer>
    </div>
  );
}

export default App;
