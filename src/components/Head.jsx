import React from 'react'
import styles from '../public/css/Head.css'

function Head () {
  return (
    <div className={styles.header}>
      <img className={styles.img} src={require('../public/img/wp-logo2.png')} alt=""/>
      Welcome to Whinepad!
    </div>
  )
}

export default Head
