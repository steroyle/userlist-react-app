import React, { useState } from 'react'
import Card from '../../UI/Card'
import Button from '../../UI/Button'
import Modal from '../../UI/Modal'
import styles from './UserForm.module.css'

const UserForm = (props) => {

  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [error, setError] = useState()

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setAge(parseInt(event.target.value))
  }

  const submitHandler = (event) => {
    event.preventDefault()

    //validation
    if (username.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).'
      })
      return;
    }
    if (+age < 1 || age.length === 0) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).'
      })
      return;
    }

    console.log('all data valid')

    const newUserData = {
      id: Math.floor(Math.random() * 100000),
      name: username,
      age: age,
    }

    props.onAddUser(newUserData)

    //reset form
    setUsername('')
    setAge('')
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && <Modal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={styles.form}>
        <form onSubmit={submitHandler} noValidate="novalidate">
          <div className={`${styles['form__control']}`}>
            <label htmlFor="username" className={styles.label}>Username</label>
            <input
              type="text"
              name="username"
              id="id"
              value={username}
              className={styles['input--text']}
              onChange={usernameChangeHandler}
            />
          </div>
          <div className={`${styles['form__control']}`}>
            <label htmlFor="age" className={styles.label}>Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              className={styles['input--text']}
              onChange={ageChangeHandler}
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default UserForm