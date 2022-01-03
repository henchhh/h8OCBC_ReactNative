import React, { Component } from "react";

class Header extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            counter: 0
        }
    }

    // getName(){ // get name from constructor
    //     return this.state.name
    // }

    setName = () => {
        this.setState({
            name: 'Dean'
        })
    }

    setZero = () => {
        this.setState({
            counter: 0
        })
    }
    
    increment = () => {
        this.setState({
            counter: this.state.counter+1
        })    
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter-1
        })
    }

    changeCount = type => {
        const oldCounter = this.state.counter
        // ternary operator => periksa kondisi
        // format: [kondisi] ? [hasil jika true] : [hasil jika false]
        switch(type){
            case'increment':
                this.setState({
                    counter: oldCounter>=10 ? 0 : oldCounter+1
                })
                break
            case 'decrement':
                this.setState({
                    counter: oldCounter<=0 ? 0 : oldCounter-1
                })
                break
            default:
        }
    }

    render(){
        return(
            <div>
                <h3>
                    {this.state.name}
                </h3>
                <h3>
                    {this.state.counter}
                </h3>
                <br />
                <button onClick={this.setName}>
                    Set Name
                </button>
                <button onClick={()=>this.changeCount('increment')}>
                    +
                </button>
                <button onClick={()=>this.changeCount('decrement')}>
                    -
                </button>
            </div>
        )
    }
}


export default Header