import { useState } from 'react'
import { useParams } from 'react-router-dom'

function NameChange(){
    const params = useParams()
    const [name, setName] = useState(params.name || 'Dean')
    const [anotherName, setAnotherName] = useState('CLICKED') // cara 1: useState tambahan

    function changeName (){
        // cara 1: useState tambahan
        const oldName = name
        setName(anotherName)
        setAnotherName(oldName)
    
        // // cara 2: conditional
        // setName(name === 'Dean' ? 'CLICKED' : 'Dean')
    }
        
    return(
        <>
            <p className="fs-3">
                Nama saya adalah <span className="fw-bold">{name}</span>
            </p>
            <button type="button" class="btn btn-primary" onClick={changeName}>
                Change name
            </button>
        </>
    )
}

export default NameChange