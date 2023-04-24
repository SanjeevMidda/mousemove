import { useState } from 'react';
import './index.css';

function App() {

  let styles = {
    transform: `translate(420px, 20px)`,
  }

  const [color, setColor] = useState(true);
  const [object, setObject] = useState(styles);
  
  function changeColor(){
    setColor(!color);
    setObject({...styles, transform:`translate(${Math.floor(Math.random() * 900)}px, ${Math.floor(Math.random() * 900)}px`});

    console.log(styles.transform);
  }

  return (
    <div className="App">
  <div className="container">
    <button onClick={changeColor}>Hello</button>
      <h1 style={object} className='mouse'>🐭</h1>
  </div>
    </div>
  );
}

export default App;
