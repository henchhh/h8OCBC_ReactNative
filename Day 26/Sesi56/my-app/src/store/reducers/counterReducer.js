// 1. Initial state
// 2. Reducer, kemudian export

const initialState = {
    counter: 0,
    money: 0
}

export default function counterReducer (state = initialState, action){
    const { type, payload } = action

    switch(type){
        case 'INCREMENT':
            return { ...state, counter: state.counter+payload, money: state.money+payload} // seperator case
        case 'DECREMENT':
            return { ...state, counter: state.counter+payload, money: state.money+payload } // seperator case
        case 'ADDBY10':
            return { ...state, counter: state.counter+payload, money: state.money+payload } // seperator case
        case 'RESET':
            return { ...state, counter: 0, money:0 } // seperator case
        default:
            return state
    }
}