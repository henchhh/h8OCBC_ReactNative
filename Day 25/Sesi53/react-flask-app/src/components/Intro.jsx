import React, { useState, useEffect } from "react";

function Intro(){
    const [ message, setMessage ] = useState('')

    useEffect(()=>{
        fetch('/hello')
            .then(response => response.json())
            .then(data => {setMessage(data.message)
            })
    }, [])
    
    return (
        <>
            <p>Flask says { message }</p>
        </>
    )
}

export default Intro