import React, {Component, PropTypes} from 'react'
import { Router, Route, IndexLink, BrowserRouter, BrowserHistory, HashHistory, HashRouter, Link } from 'react-router-dom'

import Home from '../components/Home' // 首页
import whinepad from '../components/whinepad/Whinepad'
import HelperCenter from '../components/HelperCenter' // 帮助中心
import SaleRecord from '../components/SaleRecord' // 销售记录
import SelectProducts from '../components/SelectProducts' // 选择商品
import AllDeposit from '../components/AllDisposit' // 余额
import ApplyDisposit from '../components/ApplyDisposit' // 申请提现
import ApplyRecord from '../components/ApplyRecord' // 提现记录

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
  <HashRouter history={BrowserHistory}>
    <Roots>
      <Route exact path='/' component={Home}/>
      <Route exact path='/index' component={Home}/>
      <Route path="/whinepad" component={whinepad}/>
      <Route path="/helperCenter" component={HelperCenter}/>
      <Route path="/saleRecord" component={SaleRecord}/>
      <Route path="/selectProducts" component={SelectProducts}/>
      <Route path="/allDisposit" component={AllDeposit}/>
      <Route path="/applyDisposit" component={ApplyDisposit}/>
      {<Route path="/applyRecord" component={ApplyRecord}/>}
    </Roots>
  </HashRouter>
)
export default RouteConfig
