import React from 'react'
import ReactDOM from 'react-dom'
import Whinepad from './components/Whinepad'

class HelloWorld extends React.Component {
  render () {
    return (
      <Whinepad/>
    )
  }
}

// ========================================

ReactDOM.render(
  <HelloWorld/>, document.getElementById('app'))
