import React from 'react'
import ReactDOM from 'react-dom'
import ToDoApp from './components/ToDoApp'

class HelloWorld extends React.Component {
  render () {
    return (
      <ToDoApp/>
    )
  }
}

// ========================================

ReactDOM.render(
  <HelloWorld/>, document.getElementById('app'))
