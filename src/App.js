import { useState } from 'react';
import './index.css';


function Square() {

  const [value, setValue] = useState(null);

  function handleclick()
  {
     setValue('X');
  }
  return <button className="square" onClick={handleclick}>{value}</button>;
}




function Board() {
  return (
    <>
      <div className="board-row">
       <Square />
       <Square/>
       <Square/>
      </div>
      <div className="board-row">
       <Square/>
       <Square/>
       <Square/>
      </div>
      <div className="board-row">
       <Square/>
       <Square/>
       <Square/>
      </div>
    
    </>
  );
}

export default Board;
