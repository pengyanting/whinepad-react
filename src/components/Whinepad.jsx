import React from 'react'
import List from './List'
import Input from './Input'
import Head from './Head'
import Button from './Button'
import styles from '../public/css/style.css'
import Dialog from './Dialog'
class Whinepad extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [{ name: 'ss', year: '1009', rating: '5', grape: 'sss' }],
      dialogShow: false
    }
    this.handleDialogShow = this.handleDialogShow.bind(this)
    this.hanleDialogHide = this.hanleDialogHide.bind(this)
    this.handleCommit = this.handleCommit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDialogShow () {
    this.setState({
      dialogShow: true
    })
  }
  hanleDialogHide () {
    this.setState({
      dialogShow: false
    })
  }
  handleCommit (value) {
    this.setState((oldVal) => ({
      list: [...oldVal.list, value],
      dialogShow: false
    }))
  }
  handleDelete (index) {
    this.setState((oldVal) => ({
      list: [...oldVal.list.slice(0, index), ...oldVal.list.slice(index + 1)]
    }))
  }
  render () {
    return (
      <div>
        <Head/>
        <div className={styles.box}>
          <div className={styles.box_top}>
            <Button value='+ Add' size='big' onClick={this.handleDialogShow}/>
            <Input/>
          </div>
          <List
            list={this.state.list}
            del={this.handleDelete}/>
          <Dialog
            dialogShow={this.state.dialogShow}
            hide={this.hanleDialogHide}
            commit={this.handleCommit}/>
        </div>
      </div>
    )
  }
}

export default Whinepad
