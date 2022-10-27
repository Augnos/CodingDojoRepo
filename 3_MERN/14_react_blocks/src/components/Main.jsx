import React, { Component } from 'react';

const mainStyle = {
    "background-color": "#e06666",
}

class Main extends Component {
    render() {
        return (
            <div className='col-8 m-3' style={mainStyle}>
                {this.props.children}
            </div>
        )
    }
}

export default Main;