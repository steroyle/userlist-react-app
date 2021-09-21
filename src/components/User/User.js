import React from 'react'
import styles from './User.module.css'
import Button from '../../UI/Button'

const User = (props) => {
  return (
    <div className={styles.user}>
      <span className={styles.name}>{props.user.name}</span>
      <span className={styles.age}>{props.user.age}</span>
      <Button className={styles.delete} size='small' onClick={() => props.onDelete(props.user.id)}>Delete</Button>
    </div>
  )
}

export default User