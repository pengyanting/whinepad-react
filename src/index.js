import React from 'react'
import ReactDOM from 'react-dom'
import Whinepad from './components/Whinepad'
import { IndexRoute, Redirect, browserHistory, Router, Link, applyRouterMiddleware } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'
class HelloWorld extends React.Component {
  render () {
    return (
      <Whinepad/>
    )
  }
}

// ========================================

ReactDOM.render(
  (<BrowserRouter>
    <Route exact path="/" component={ Whinepad } />
  </BrowserRouter>), document.getElementById('app'))
