import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
// import { BrowserRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import './styles/Users.css'

export const Tes = () => {
    return (
        <>
            <p>Ini tes</p>
        </>
    )
}

function Users(){
    // States
    const history = useHistory()
    const [ users, setUsers] = useState([])
    const [ user, setUser ] = useState()
    // const url = useState('https://jsonplaceholder.typicode.com/users')

    // function go back to home
    function handleToRoot(){
        history.push("/")
    }

    // function go back to home
    function handleToUsers(){
        console.log("Button ke Users keclick")
        history.push("/users")
    }

    // // function go to data based on key
    // function handleButtonUpdate(e){
    //     console.log(e)
    // }
    
    // Fetch data
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => setUsers(result))
    }, [])

    // function untuk mendapatkan data spesifik
    function handleButtonUpdate(id){
        console.log(id)
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(result => setUser(result))
    } 

    

    return(
        <>
            <div className="container">
                {Tes}
                <button type="button" onClick={handleToRoot} className="btn btn-success btn-lg mb-4">Back to Home</button>
                <div className="p-2 mb-4 bg-light rounded-3 border py-4">
                    <table className="container table">
                        <thead className="thead-dark bgTableHead">
                            <tr>
                                <th scope="col" className="text-center">ID</th>
                                <th scope="col" className="text-center">Name</th>
                                <th scope="col" className="text-center">Username</th>
                                <th scope="col" className="text-center">Email</th>
                                <th scope="col" className="text-center">Action</th>
                                {/* <th scope="col">Data</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {/* {
                                user && (
                                    <>
                                    <tr key={user.id}>
                                        <td className="fw-bold text-center">{ user.id }</td>
                                        <td>{ user.name }</td>
                                        <td>{ user.username }</td>
                                        <td>{ user.email }</td>
                                        <td className="text-center ">
                                            <button type="button" className="btn btn-warning btn-sm">Update</button>
                                            <button type="button" className="btn btn-danger btn-sm" style={{ marginLeft: '5px' }} onClick={() => setUser()}>Go back to Users</button>
                                        </td>
                                    </tr>
                                    
                                    </>
                                )
                            }
                            <tr>
                                        <td className="fw-bold text-center">{ user.id }</td>
                                        <td><input type="text" placeholder="Masukkan nama" /></td>
                                        <td><input type="text" placeholder="Masukkan username" /></td>
                                        <td><input type="text" placeholder="Masukkan email" /></td>
                                    </tr> */}
                            {
                                users.map(user => (
                                        <tr key={user.id}>
                                            <td className="fw-bold text-center">{ user.id }</td>
                                            <td>{ user.name }</td>
                                            <td>{ user.username }</td>
                                            <td>{ user.email }</td>
                                            <td className="text-center ">
                                                <button type="button" className="btn btn-warning btn-sm" onClick={()=>handleButtonUpdate(user.id)}>Update</button>
                                                <button type="button" className="btn btn-danger btn-sm" style={{ marginLeft: '5px' }}>Delete</button>
                                            </td>
                                            {/* <td>{ JSON.stringify(user) }</td> */}
                                            
                                        </tr>
                                
                                ))
                            }
                        </tbody>
                        {/* <p className="col fs-4">
                            {user.name}
                        </p>
                        <p>
                            {JSON.stringify(user)}
                        </p> */}
                        {/* <div className="float-right">
                            <button className="btn btn-info btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" >More details</button>
                        </div> */}
                    </table>
                </div>
                {/* Modal */}
                {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div key={article.id} className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title fs-1 fw-bold text-primary" id="exampleModalLabel">
                                    {article.title}
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <span className="fs-4">{article.body}</span>
                                <br />
                                <br />
                                <span className="fs-8 text-muted">Created by ID {article.id} on {article.date.substring(0,10)} at {article.date.substring(11,19)}</span>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Users