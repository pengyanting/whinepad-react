import React, { Component, PropTypes } from 'react'
import { Link, IndexLink } from 'react-router-dom'
import * as styles from '../../public/scss/head.scss'
/**
 * 公共头部
 */
export default class Head extends Component {
  constructor (props) {
    super()
    this.state = {
      showHide: 'none'
    }
    this.showNav = this.showNav.bind(this)
  }
  showNav () {
    if (this.state.showHide === 'block') {
      this.setState({
        showHide: 'none'
      })
    } else {
      this.setState({
        showHide: 'block'
      })
    }
  }
  render () {
    let {nav, saleRecord, title, HideList, goback, save, productsInform, applyRecord, params} = this.props
    let navState = this.state.showHide
    if (nav) {
      nav = (
        <div className={styles.head_menu} onClick={ this.showNav }>
          <ul className={styles.head_menu_list} style={{ display: navState }}>
            <li>
              <Link to='/'>
                <span>销售录入</span>
                <span className={styles.head_arrow}></span>
              </Link>
            </li>
            <li>
              <Link to='/allDisposit'>
                <span>提现</span>
                <span className={styles.head_arrow}></span>
              </Link>
            </li>
            <li>
              <Link to='/helperCenter'>
                <span>帮助中心</span>
                <span className={styles.head_arrow}></span>
              </Link>
            </li>
          </ul>
        </div>
      )
    }
    if (goback) {
      goback = (<span className={styles.head_goback} onClick={() => window.history.back()}>返回</span>)
    }
    return (
      <header className={styles.header}>
        { nav }
        { goback }
        {
          title && <span className={styles.head_title}>{title}</span>
        }
        {
          saleRecord && <Link to="/saleRecord" className={styles.head_icon_right}></Link>
        }
        {
          applyRecord && <Link to='/applyRecord' className={styles.head_icon_right}></Link>
        }
        {
          save && <Link to={'/index?' + params} className={styles.head_save}>确定</Link>
        }
      </header>
    )
  }
}
