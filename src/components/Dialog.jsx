import React from 'react'
import styles from '../public/css/Dialog.css'
import Input from './Input'
import Button from './Button'
class Dialog extends React.Component {
  constructor () {
    super()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      name: '',
      grape: '',
      year: 0,
      rating: '',
      commits: ''
    }
  }
  handleInputChange (i) {
    this.setState({
      [i.target.name]: i.target.value
    })
  }
  render () {
    const options = [
      { value: 'aasasa' },
      { value: 'sssss' }
    ]
    return (
      <div>
        { this.props.dialogShow &&
        <div className={styles.alertBox}>
          <section className={styles.boxInner}>
            <header className={styles.header}>Add new item</header>
            <section className={styles.center}>
              <form>
                <Input label='Name' name='name' type='text' onChange={this.handleInputChange}/>
                <Input label='Year' name='year' type='number' onChange={this.handleInputChange}/>
                <Input label='Grape' name='grape' type='select' options={options} onChange={this.handleInputChange}/>
                <Input label='Rating'/>
                <Input label='Commits' name='commits' type='textarea' onChange={this.handleInputChange}/>
              </form>
            </section>
            <footer className={styles.footer}>
              <span style={{marginRight: '10px'}} onClick={() => this.props.hide()}>Cancel</span>
              <Button value='Add' size='small' onClick={() => this.props.commit(this.state)}/>
            </footer>
          </section>
        </div>
        }
      </div>
    )
  }
}

export default Dialog
