import React, {useState,useEffect} from "react"

function TimeFunc(){
    // Sesi live clock
    const [date, setDate] = useState(new Date())

    function tick(){
    setDate(new Date())
    }
    useEffect(()=>{
        const interval = setInterval(()=>tick(),1000)
        console.log("Test Timer")
        return()=> {
            clearInterval(interval)
        }
    },[])

    return (
        <>
            <h1>{date.toLocaleTimeString()}</h1>
        </>
    )
}

export default TimeFunc