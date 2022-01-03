import React from "react";

export default class Users extends React.Component {
    constructor(){
        super()
        this.state = {
            username: 'user01'
        }
    }

    getUsername(){
        return this.state.username
    }

    changeName = (newName) => {
        this.setState({
            username: ("Namanya berubah menjadi "+newName)
        })
    }

    render(){
        return(
            <>
                <h1>{this.getUsername()}</h1>
                <button onClick={()=> this.changeName('Dean')}>Ganti nama, gan!</button>
            </>
        )
    }
}