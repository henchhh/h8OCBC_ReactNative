import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter } from '../store/actions/counterActions';

function Counter(){
    const dispatch = useDispatch()
    let counter = useSelector(({ counter }) => counter.counter)

    function increment(){
        dispatch(incrementCounter())
    }
    function decrement(){
        dispatch({ type: 'DECREMENT', payload: -1 })
    }
    function addBy10(){
        dispatch({ type: 'ADDBY10', payload: 10 })
    }
    function reset(){
        dispatch({ type: 'RESET'})
    }

    // const counter = useSelector(({ counter }) => counter.counter)

    return(
        <>
            <h2>Let's count</h2>
            <hr />
            <h3>{ counter }</h3>
            {/* ()=> counter!==10 ? setCounter(counter+1) : setCounter(0) */}
            <button onClick={()=>counter>=10 ? reset() : increment()}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={()=>counter>=100 ? reset() : addBy10()}>Add by 10</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default Counter