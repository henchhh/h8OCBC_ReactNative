import React, { useState, useEffect } from "react";

function TimeNow(){
    const [ time, setTime ] = useState(0)

    function tick(){
    setTime(new Date())
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
            <p>The current date = {new Date(time).toDateString()}</p>
            <p>The current time = {new Date(time).toTimeString()}</p>
            <p>The current date and time = {new Date(time).toString()}</p>
        </>
    )
}

export default TimeNow