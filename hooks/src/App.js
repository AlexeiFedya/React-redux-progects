import React, {useState, useEffect} from 'react';


function App() {
  return (
    <div >
      <HooksStyleComponent/>
    </div>
  );
}

const HooksStyleComponent = () => {
    const [color, setColor] = useState('white')
    const [fontSize, setFontSize] = useState(14)

    const changeColorBlack = () => {
      setColor((color) => {
        if (color === 'white'){
          return 'black'
        } else {
          return 'white'
        }
      })
    }

    const changeSize = () => {
      setFontSize((s)=> s + 2)
    }

    return(
      <div style={{ 
            padding: '10px',
            backgroundColor: color,
            fontSize: `${fontSize}px`
             }}>
        Hello World
  
        <button onClick={changeColorBlack}>Dark or White</button>
        <button onClick={changeSize}>+</button>
      </div>
    )
}

export default App;
