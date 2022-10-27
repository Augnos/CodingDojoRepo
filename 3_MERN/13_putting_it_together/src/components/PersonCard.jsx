import React, { Component } from 'react';


class PersonCard extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            age: parseInt(this.props.age)
        }
    }
    
    ageHandler = () => {
        this.setState({
            age: this.state.age +1
        })
    }
    
    render(){
        const { firstName, lastName } = this.props;
        const { age } = this.state;
        return(
            <div>
                <h1>{ lastName }, { firstName }</h1>
                <p>Age: { age }</p>
                <button onClick={ this.ageHandler }>
                    Birthday button for {firstName} {lastName}
                </button>
            </div>
        )
    }
}

export default PersonCard;