import { useEffect, useState } from "react";

function Counter() {
    const [ counter, setCounter ] = useState(0)
    
    useEffect(()=>{
        console.log('Efek berjalan/di-trigger di component Counter')
    })
    
    function changeCounter(e){
        console.log(e)
        setInitialCounter(counter=0)
    }

    return(
        <div>
            <h2>Let's count</h2>
            <h3>{ counter }</h3>
            <button onClick={()=>setCounter(counter+1)} style={{fontSize: '2em'}}>Click me</button>
            <button onClick={changeCounter}>Reset</button>
        </div>
    )
}

export default Counter