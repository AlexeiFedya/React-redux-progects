import React, {useState, useEffect} from 'react';


function App() {
  return (
    <div >
      <HooksStyleComponent/>
    </div>
  );
}

const HooksStyleComponent = () => {
    const [value, setValue] = useState(0)
    const [visible, setVisible] = useState(true)

    if (visible) {
      return (
        <div>
          <button
            onClick={() => setValue((v)=> v+1)}>+ </button>
            <button
            onClick={() => setValue((v)=> v-1)}>-</button>
          <button
            onClick={()=> setVisible(false)}> hide </button>
            {/* <HookCounter value={value}/> */}
            <Notification/>
        </div>
      )
    } else {
      return(
        <button
          onClick={()=> setVisible(true)}>Show</button>
      )
    }
}

const HookCounter = ({value}) => {
  return <p>{value}</p>
}

const Notification = () => {

  const [visible, setVisible] = useState(true)

  useEffect(()=> {
    const timeout =setTimeout(()=> {
      setVisible(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, []);
  
  return (
    <div>
      { visible && <p>Hello </p>}
    </div>
  )
}

export default App;
