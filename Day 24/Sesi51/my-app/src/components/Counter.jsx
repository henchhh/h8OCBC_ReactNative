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
        <div className="text-center">
            <h2 className="fs-1 text-primary">Let's count</h2>
            <h3>{ counter }</h3>
            <button type="button" className="btn btn-primary btn-lg mr-5" onClick={()=> counter!==10 ? setCounter(counter+1) : setCounter(0)}>Click me</button>
            <button type="button" className="btn btn-warning btn-lg" onClick={setCounterZero}>Reset</button>
        </div>
    )
}

export default Counter