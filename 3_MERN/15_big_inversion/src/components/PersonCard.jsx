import React from 'react';

// class PersonCard extends Component{
//     render(){
//         const { firstName, lastName, age, hairColor } = this.props;
//         return(
//             <div>
//                 <h1>{ lastName }, { firstName }</h1>
//                 <p>Age: { age }</p>
//                 <p>Hair Color: { hairColor }</p>
//             </div>
//         )
//     }
// }

const PersonCard = props => {
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
}

export default PersonCard;