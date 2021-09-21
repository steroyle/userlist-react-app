import React from 'react'
import User from '../User/User'
import Card from '../../UI/Card'
import styles from './UserList.module.css'

const UserList = (props) => {
  return (
    <Card className={styles['user-list']}>
      <h2 className={styles.heading}>UserList</h2>
      {props.users.map((user) => {
        return <User key={user.id} user={user} onDelete={props.onDelete} />
      })}
    </Card>
  )
}

export default UserList