import { createStore } from 'redux';
// import thunkMiddleware from 'redux-thunk'

import reducer from './reducers/reducer'

const store = createStore(reducer)

// const myAction = (dispatch) => {
//     setTimeout(() => dispatch({
//         type: 'DELAYED_ACTION'
//     }), 2000)
// }

// store.dispatch(myAction)

export default store;