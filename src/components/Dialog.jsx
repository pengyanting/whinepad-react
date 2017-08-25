import React from 'react'
import styles from '../public/css/Dialog.css'
import Input from './Input'
import Button from './Button'
class Dialog extends React.Component {
  render () {
    return (
      <div>
        { this.props.dialogShow &&
        <div className={styles.alertBox}>
          <section className={styles.boxInner}>
            <header className={styles.header}>{this.props.title}</header>
            {this.props.children}
          </section>
        </div>
        }
      </div>
    )
  }
}

export default Dialog
