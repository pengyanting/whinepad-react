import React, { Component, PropTypes } from 'react'
import Head from './common/Head'
import * as styles from '../public/scss/allDisposit.scss'
import template from './common/template'
import { Link } from 'react-router-dom'
/**
 * 余额
 */
class AllDisposit extends Component {
  constructor (props) {
    super()
    this.state = {
      allDisposit: 0
    }
  }
  componentWillUpdate (nextProps, nextState) {
    if (this.props !== nextProps) {
      let { data } = nextProps.state
      if (data && data.data && data.data.data) {
        this.state.allDisposit = data.data.data.balance
      }
    }
  }
  render () {
    return (
      <div>
        <Head nav applyRecord title='提现'/>
        <div className={styles.info}>每笔提现金额不超过200元，每天最多三次</div>
        <div className={styles.disposit}>
          <p>可提现金额（元）</p>
          <p>￥
            <input type="text" disabled value={this.state.allDisposit}/>
          </p>
        </div>
        <Link className={styles.submit} to={'/applyDisposit?allDeposit=' + this.state.allDeposit}>提现</Link>
      </div>
    )
  }
}
export default template({
  id: 'allDisposit',
  component: AllDisposit,
  url: '/shopro/data/balance'
})
