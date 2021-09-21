import React from 'react'
import styles from './Modal.module.css'
import Card from './Card'
import Button from './Button'

const Modal = (props) => {
  return (
    <div className={styles.modalWrapper} onClick={props.onConfirm}>
      <Card className={styles.modal}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button onClick={props.onConfirm}>OK</Button>
        </footer>
      </Card>
    </div>
  )
}

export default Modal