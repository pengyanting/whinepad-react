import React from 'react'
import List from './List'
import Input from './Input'
import Head from './Head'
import Button from './Button'
import styles from '../../public/css/style.css'
import Dialog from './Dialog'
import Star from './Star'
import { Link } from 'react-router-dom'
class Whinepad extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [{ name: 'ss', year: '1009', rating: '5', grape: 'sssss', commits: 'sssss' }],
      dialogShow: false,
      dialogInfoShow: false,
      form: {
        name: '',
        grape: '',
        year: 0,
        rating: 1,
        commits: ''
      },
      index: ''
    }
    this.handleDialogShow = this.handleDialogShow.bind(this)
    this.hanleDialogHide = this.hanleDialogHide.bind(this)
    this.handleCommit = this.handleCommit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInfo = this.handleInfo.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleMove = this.handleMove.bind(this)
    this.handleOut = this.handleOut.bind(this)
  }
  handleDialogShow (index) {
    this.setState((old) => ({
      dialogShow: true,
      form: index !== undefined ? old.list[index] : old.form,
      index: index
    }))
  }
  hanleDialogHide () {
    this.setState({
      dialogShow: false,
      dialogInfoShow: false
    })
  }
  handleCommit () {
    const index = this.state.index
    this.setState((oldVal) => ({
      list: index === undefined ? [...oldVal.list, oldVal.form] : [...oldVal.list.slice(0, index), oldVal.form, ...oldVal.list.slice(index + 1)],
      dialogShow: false,
      form: {
        name: '',
        grape: '',
        year: 0,
        rating: 1,
        commits: ''
      },
      saveNum: 1
    }))
  }
  handleDelete (index) {
    this.setState((oldVal) => ({
      list: [...oldVal.list.slice(0, index), ...oldVal.list.slice(index + 1)]
    }))
  }
  handleInputChange (i) {
    const name = i.target.name
    const value = i.target.value
    if (name === 'search') {
      this.setState((old) => ({
        list: old.list.filter(function (item) {
          // 此处fiter为javascript数组对象的一个方法，用于检测数值元素，并返回符合条件所有元素的数组
          return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
        })
      }))
    }
    this.setState((old) => ({
      form: Object.assign({}, old.form, {[name]: value})
    }))
  }
  handleInfo (item) {
    this.setState((old) => ({
      dialogInfoShow: !old.dialogShow,
      form: item
    }))
  }
  handleClick (index) {
    this.setState((old) => ({
      form: Object.assign({}, old.form, {rating: index + 1}),
      saveNum: index + 1
    }))
  }
  handleMove (index) {
    this.setState((old) => ({
      form: Object.assign({}, old.form, {rating: index + 1})
    }))
  }
  handleOut () {
    this.setState((old) => ({
      form: Object.assign({}, old.form, {rating: old.saveNum})
    }))
  }
  render () {
    const options = [
      { value: 'aasasa' },
      { value: 'sssss' }
    ]
    return (
      <div>
        <Head/>
        <Link to='/'>Home</Link>
        <div className={styles.box}>
          <div className={styles.box_top}>
            <Button value='+ Add' size='big' onClick={this.handleDialogShow}/>
            <Input name='search' type='text' onChange={this.handleInputChange}/>
          </div>
          <List
            list={this.state.list}
            del={this.handleDelete}
            info={this.handleInfo}
            eidt={this.handleDialogShow}/>
          { /**
             * 新增
             */
          }
          <Dialog
            dialogShow={this.state.dialogShow}
            title='Add new item'>
            <section className={styles.center}>
              <form>
                <Input label='Name' name='name' value={this.state.form.name} type='text' onChange={this.handleInputChange}/>
                <Input label='Year' value={this.state.form.year} name='year' type='number' onChange={this.handleInputChange}/>
                <Input label='Grape' value={this.state.form.grape} name='grape' type='select' options={options} onChange={this.handleInputChange}/>
                <div>
                  <label>Star</label>
                  <Star
                    score={this.state.form.rating}
                    click={this.handleClick}
                    move={this.handleMove}
                    out={this.handleOut}/>
                </div>
                <Input label='Commits' value={this.state.form.commits} name='commits' type='textarea' onChange={this.handleInputChange}/>
              </form>
            </section>
            <footer className={styles.footer}>
              <span style={{marginRight: '10px'}} onClick={this.hanleDialogHide}>Cancel</span>
              <Button value={this.state.index === undefined ? 'Add' : 'Edit'} size='small' onClick={this.handleCommit}/>
            </footer>
          </Dialog>
          { /*
             查看
           */
          }
          <Dialog
            title='Item info'
            dialogShow={this.state.dialogInfoShow}>
            <section className={styles.center}>
              <form>
                <div>
                  <label>Name</label>
                  <div>{this.state.form.name}</div>
                </div>
                <div>
                  <label>Year</label>
                  <div>{this.state.form.year}</div>
                </div>
                <div>
                  <label>Grape</label>
                  <div>{this.state.form.grape}</div>
                </div>
                <div>
                  <label>Rating</label>
                  <div><Star score={this.state.form.rating} disabled/></div>
                </div>
                <div>
                  <label>Commits</label>
                  <div>{this.state.form.commits}</div>
                </div>
              </form>
            </section>
            <footer className={styles.footer}>
              <Button value='OK' size='small' onClick={this.hanleDialogHide}/>
            </footer>
          </Dialog>
        </div>
      </div>
    )
  }
}

export default Whinepad
