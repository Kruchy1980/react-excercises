import React from 'react';
import UserInput from './UserInput';
// import styles from './UserOutput.module.css';

const UserOutput = props => {
    return (
        <div className={style.Paragraph}>
            <p>My name is</p>
            <p>And my age is</p>
            <UserInput />
        </div>
    )
}







export default UserOutput;