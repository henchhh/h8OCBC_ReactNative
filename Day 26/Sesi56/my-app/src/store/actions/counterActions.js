export const incrementCounter = () => { // import { incrementCounter }
    return (dispatch) => {
        // return { type: 'INCREMENT', payload: 1 }
        setTimeout(()=>{
            dispatch({ type: 'INCREMENT', payload: 1 })
        },2000)
    }
}