// const Redux = require('redux')
// import Redux from 'redux';
// import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
// const { createStore } = Redux\
// // 1. Import
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import counterReducer from './reducers/counterReducer';
import queueReducer from './reducers/queueReducer';
import thunk from 'redux-thunk'

// // 1. [initial] state
// const initialState = {
//     counter: 0,
//     money: 0,
//     arrayNew: ['Tes']
// }

// // 2. reducer
// function reducer(state = initialState, action){
//     const { type, payload } = action

//     switch(type){
//         case 'INCREMENT':
//             return { ...state, counter: state.counter+payload, money: state.money+payload, arrayNew: state.arrayNew.shift('Dean')} // seperator case
//         case 'DECREMENT':
//             return { ...state, counter: state.counter+payload, money: state.money+payload } // seperator case
//         case 'RESET':
//             return { ...state, counter: 0, money:0 } // seperator case
//         default:
//             return state
//     }
// }


// 2. Combine reducer
const rootReducer = combineReducers({
    counter: counterReducer,
    queue: queueReducer
})

// // 3. createStore()
const middleware = applyMiddleware(thunk, logger)
const store = createStore(rootReducer, compose(
    middleware, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
// const store = createStore(reducer)

// menerima sebuah function sebagai parameter
store.subscribe(()=>console.log(store.getState()))

// menerima objek literal sebagai parameter
// { type, payload } => disesuaikan dengan 2. reducer
// store.dispatch({ type: 'INCREMENT', payload: 10 })
// store.dispatch({ type: 'INCREMENT', payload: 15 })
// store.dispatch({ type: 'INCREMENT', payload: 18 })

export default store
