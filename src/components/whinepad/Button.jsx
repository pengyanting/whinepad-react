import React from 'react'
import styles from '../../public/css/Button.css'
function Button (props) {
  return (
    <button
      className={props.size === 'small' ? styles.small : styles.big}
      onClick={(e) => {
        if (props.onClick === undefined) {
          return
        }
        props.onClick()
      }}>
      {props.value}
    </button>
  )
}

export default Button
