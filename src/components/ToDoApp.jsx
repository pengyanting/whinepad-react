import React from 'react'
import List from './List'
import Input from './Input'
class ToDoApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [{
        name: 'aa',
        done: false
      }],
      newToDo: 'test'
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onInputSubmit = this.onInputSubmit.bind(this)
    this.onListItemClick = this.onListItemClick.bind(this)
    this.onListDelete = this.onListDelete.bind(this)
  }
  onInputChange (event) {
    this.setState({newToDo: event.target.value}) // updates state to new value when user changes the input value
  }
  onInputSubmit (event) {
    this.setState((oldValue) => ({
      list: [...oldValue.list, {name: oldValue.newToDo, done: false}],
      newToDo: ''
    }))
    event.preventDefault()
  }
  onListItemClick (i) {
    this.setState((oldVal) => ({
      list: [...oldVal.list.slice(0, i), Object.assign({}, oldVal.list[i], {done: !oldVal.list[i].done}), ...oldVal.list.slice(i + 1)]
    }))
  }
  onListDelete (i) {
    this.setState((oldVal) => ({
      list: [...oldVal.list.slice(0, i), ...oldVal.list.slice(i + 1)]
    }))
  }
  render () {
    console.log(this.props)
    return (
      <div>
        ToDoApp
        <Input
          onChange={this.onInputChange}
          value={this.state.newToDo}
          onSubmit={this.onInputSubmit}/>
        <List
          listItem = {this.state.list}
          onClick={this.onListItemClick}
          onDelete={this.onListDelete}/>
      </div>
    )
  }
}

export default ToDoApp
