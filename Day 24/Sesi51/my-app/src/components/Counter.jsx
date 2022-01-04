import { useEffect, useState } from "react";

function Counter() {
    const [ counter, setCounter ] = useState(0)
    
    useEffect(
        // componentDidMount()
        ()=>{
        console.log('Efek berjalan/di-trigger di component Counter')
        },
        //shouldComponentUpdate() => False, jika array kosong []
        []
    )

    useEffect(
        // componentDidUpdate()
        ()=>{
        if (counter>0) console.log('State counter berubah')
        }, 
        // shouldComponentUpdate()
        [counter]
    )

    // useEffect(()=>{
    //     window.addEventListener('blur', ()=>{
    //         console.log("Test event listener")
    //     })
    //     window.removeEventListener('blur')
    // })

    function setCounterZero(e){
        console.log(e)
        setCounter(0)
    }

    return(
        <div>
            <h2>Let's count</h2>
            <h3>{ counter }</h3>
            <button onClick={()=> counter!==10 ? setCounter(counter+1) : setCounter(0)} style={{fontSize: '2em'}}>Click me</button>
            <button onClick={setCounterZero} style={{fontSize: '2em'}}>Reset</button>
        </div>
    )
}

export default Counter