import React from 'react';

const UserInput = props => {
    const inputStyle ={
        border: '2px solid green',
        shadowBox: '1px 5px 10px #262466',
    }
    return (
        <div>
            <input
            style={inputStyle} 
            type="text" 
            onChange={props.changed} 
            value={props.currentName}/>
        </div>
    )
}


export default UserInput;