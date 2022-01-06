// 1. [initial] state
const initialState = {
    counter: 0,
    name: 'Dean',
    className: 'OCBC Hactiv8 Batch 2',
    arrayNew: ['Tes']
}

// 2. reducer
function counter(state = initialState, action){
    // const { type, payload } = action

    switch(action.type){
        case 'INCREMENT':
            return { ...state, counter: state.counter+1, arrayNew: state.arrayNew.push('Dean Array')} // seperator case 
        case 'DECREMENT':
            return { ...state, counter: state.counter-1 } // seperator case 
        case 'RESET_COUNTER':
            return { ...state, counter:0 }
        default:
            return state
    }
}

// 3. createStore()
const store = Redux.createStore(counter)

// Buat function render
var element = document.getElementById('counter')
const render = () => {
    const { counter, name, className, arrayNew } = store.getState()
    console.log({ counter, name, className, arrayNew })
    element.innerHTML = store.getState().counter.toString()
}

// Panggil render dan daftarkan ke subscribe
render()
store.subscribe(render)

// Implementasi dispatch pada tag-tag HTML
const incrementElement = document.getElementById('increment')
const decrementElement = document.getElementById('decrement')

incrementElement.addEventListener('click', ()=>{
    const counter = store.getState().counter
    if (counter<10) store.dispatch({ type: 'INCREMENT' })
    else store.dispatch({ type: 'RESET_COUNTER' })
})

decrementElement.addEventListener('click', ()=>{
    const counter = store.getState().counter
    if (counter>-10) store.dispatch({ type: 'DECREMENT' })
    else store.dispatch({ type: 'RESET_COUNTER' })
})



// // menerima sebuah function sebagai parameter
// store.subscribe(()=>console.log(store.getState()))

// // menerima objek literal sebagai parameter
// // { type, payload } => disesuaikan dengan 2. reducer
// store.dispatch({ type: 'INCREMENT', payload: 10 })
// store.dispatch({ type: 'INCREMENT', payload: 15 })
// store.dispatch({ type: 'INCREMENT', payload: 18 })