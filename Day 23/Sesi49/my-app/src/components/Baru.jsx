import React, {Component} from "react";
import PropTypes from "prop-types";
import Header from "./Header";

export default class Baru extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
    }

    setName = () => {
        console.log(this.props)
        this.setState({
            name: 'Dean'
        })
    }

    render(){
        return(
            <>
                <h1>Batch {this.props.batch}</h1>
                <img src={this.props.logo} alt="logo"/>
                <h3>
                    {this.state.name}
                </h3>
                <button onClick={this.setName}>
                    Set Name
                </button>
            </>
        )
    }
}

// PROPTYPE PROPTYPES
Baru.propTypes = {
    batch: PropTypes.string,
    logo: PropTypes.string
}