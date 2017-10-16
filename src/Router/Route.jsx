import React, {Component, PropTypes} from 'react'
import { Router, Route, IndexLink, BrowserRouter, HashHistory, HashRouter, Link } from 'react-router-dom'

import Home from '../components/Home' // 首页
import whinepad from '../components/Whinepad'
import HelperCenter from '../components/HelperCenter' // 帮助中心
import SaleRecord from '../components/SaleRecord' // 销售记录
import SelectProducts from '../components/SelectProducts' // 选择商品

class Roots extends Component {
  render () {
    return (
      <div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

const RouteConfig = (
  <BrowserRouter history={HashHistory}>
    <Roots>
      <Route exact path='/' component={Home}/>
      <Route path="/whinepad" component={whinepad}/>
    </Roots>
  </BrowserRouter>
)
export default RouteConfig
