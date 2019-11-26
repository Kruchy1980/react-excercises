import React from 'react'
import styles from './UserOutput.module.css'

const UserOutput = props => {
  return (
    <div className={styles.UserOutput}>
      <p>My name is {props.userName}</p>
      <p>And that is all you need to know about me</p>
    </div>
  )
}

export default UserOutput
