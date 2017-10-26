import React, { Component } from 'react'
import Head from './common/Head'
import * as styles from '../public/scss/helperCenter.scss'
/**
 * 帮助中心
 */
export default class HelperCenter extends Component {
  render () {
    return (
      <div>
        <Head nav title='帮助中心'/>
        <header className={styles.nav}><span>激励政策</span></header>
        <div>
          <ul className={styles.content}>
            <div>科技玩具系列</div>
            <li>（1）售卖599产品，单套提成50元</li>
            <li>（2）售卖599产品，单套提成50元</li>
            <li>（3）售卖599产品，单套提成50元</li>
            <li>（4）售卖599产品，单套提成50元</li>
          </ul>
          <ul className={styles.content}>
            <div>机器人电脑系列</div>
            <li>（1）售卖599产品，单套提成50元</li>
            <li>（4）售卖599产品，单套提成50元</li>
          </ul>
          <ul className={styles.content}>
            <div>手环系列</div>
            <li>（1）售卖599产品，单套提成50元</li>
          </ul>
        </div>
      </div>
    )
  }
}
