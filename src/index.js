import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import { BrowserRouter, Router, HashRouter, Match, Route, Link, HashHistory, IndexLink } from 'react-router-dom'
import Whinepad from './components/Whinepad'
const store = createStore(counter)
const rootEl = document.getElementById('app')

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/whinepad">whinepad</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
const Home = () => (
  <div>
    <h3>Home</h3>
  </div>
)
const render = () => ReactDOM.render((
  <div>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/whinepad" component={Whinepad} />
      </App>
    </BrowserRouter>
  </div>
), rootEl
)

render()
store.subscribe(render)
