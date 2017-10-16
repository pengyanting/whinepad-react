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
    return (
      <header className={styles.header}>
        <div className={styles.head_menu} onClick={ this.showNav }>
          <ul className={styles.head_menu_list} style={{ display: navState }}>
            <li>
              <Link to='/'>
                <span>销售录入</span>
                <span className={styles.head_arrow}></span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <span>提现</span>
                <span className={styles.head_arrow}></span>
              </Link>
            </li>
            <li>
              <Link to='/'>
                <span>帮助中心</span>
                <span className={styles.head_arrow}></span>
              </Link>
            </li>
          </ul>
        </div>
        {
          title && <span className={styles.head_title}>{title}</span>
        }
        {
          saleRecord && <Link to="/" className={styles.head_icon_right}></Link>
        }
        {
          applyRecord && <Link to='/' className={styles.head_icon_right}></Link>
        }
      </header>
    )
  }
}
