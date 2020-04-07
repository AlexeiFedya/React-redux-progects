import React from 'react';
import { createStore } from 'redux';

const reducer = (state = 0, action) => {

  // if (action.type === 'INC') {
  //   return state + 1;
  // }


  switch (action.type) {
    case 'INC':
      return state + 1;

      default: // если не распознали наше действие то по дефолту возвращаем state 
        return state;
  }

}

const store = createStore(reducer)
store.subscribe(() => {
  console.log(`store change - ${store.getState()}`)
})


store.dispatch({type:'INC'})
store.dispatch({type:'INC'})
store.dispatch({type:'INC'})

function App() {
  return (
    <div>
     <p>{store.getState()}</p>
     <p>jjj</p>
    </div>
  );
}

export default App;
