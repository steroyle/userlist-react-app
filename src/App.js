import React, { useState } from 'react'
import styles from "./App.module.css";
import UserForm from './components/UserForm/UserForm'
import UserList from './components/UserList/UserList'

function App() {

  const initialUsers = [
    {
      id: 1,
      name: 'Henry',
      age: 24,
    },
    {
      id: 2,
      name: 'Sarah',
      age: 32,
    }
  ]

  const [ users, setUsers ] = useState(initialUsers)

  const addUser = (newUserData) => {
    setUsers(prevUsers => {
      return [...prevUsers, newUserData]
    })
  }

  const deleteHandler = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== id)
    })
  }

  return (
    <div className={styles.app}>
      <UserForm onAddUser={addUser} />
      {users.length > 0 && <UserList users={users} onDelete={deleteHandler} />}
    </div>
  );
}

export default App;
