import React, {Component, PropTypes} from 'react'
import Head from './common/Head'
import classNames from 'classnames/bind'
import * as styles from '../public/scss/home.scss'
import { Link } from 'react-router-dom'
let cn = classNames.bind(styles)
/**
 * 首页（销售录入）
 */
export default class Home extends React.Component {
  constructor (prop) {
    super()
    this.state = {
      products: [{name: 'ipone5S', num: 1}, {name: 'ipone6S', num: 2}],
      saleMoney: '',
      name: '',
      phone: '',
      saleOldvalue: ''
    }
    this.changeValue = (type, event) => {
      if (type === 'money') {
        let value = event.target.value
        if ((/^\d*?\.?\d{0,2}?$/gi).test(value)) {
          if ((/^0+[1-9]+/).test(value)) {
            value = value.replace(/^0+/, '')
          }
          if ((/^0+0\./).test(value)) {
            value = value.replace(/^0+/, '0')
          }
          value = value.replace(/^\./gi, '0.')
          this.state.saleOldvalue = value
          this.state.inputLength = value.length
        } else {
          value = this.state.saleOldvalue
        }
        this.setState({
          saleMoney: value
        })
      } else if (type === 'name') {
        this.setState({
          name: event.target.value
        })
      } else if (type === 'phone') {}
    }
  }
  render () {
    let products = this.state.products
    return (
      <div>
        <Head nav saleRecord title='销售录入'/>
        <div className={styles.index_tips}>
          <span className={styles.tip_text}>请录入您的销售业绩</span>
        </div>
        <form>
          <div className={styles.input_container}>
            <label htmlFor="">销售金额</label>
            <input type="text" value={this.state.saleMoney} onChange={this.changValue.bind(this, 'money')} placeholder='请输入订单金额'/>
          </div>
          <div className={styles.input_container}>
            <label htmlFor="">客户姓名</label>
            <input type="text" value={this.state.name} onChange={this.changeValue.bind(this, 'name')} placeholder='请输入客户姓名'/>
          </div>
          <div className={styles.input_container}>
            <label htmlFor="">客户电话</label>
            <input type="text" value={this.state.phone} onChange={this.changeValue.bind(this, 'phone')} placeholder='请输入客户电话'/>
          </div>
        </form>
        <div className={styles.index_tips}>
          <span className={styles.tip_text}>请选择销售的产品</span>
        </div>
        <div className={styles.choose_products}>
          <Link to='/selectProducts' className={products.length > 0 ? styles.show_icon : styles.link_choose}>{products.length > 0 ? '' : '请选择销售的产品'}</Link>
          <ul className={styles.products_list}>
            {
              products.length > 0 ? products.map((item, index) => {
                return (
                  <li className={styles.list_item} key={index}>
                    <span className={styles.product_style}>{item.name}</span>
                    <span className={cn('product_style', 'x')}>X</span>
                    <span className={styles.product_style}>{item.num}</span>
                  </li>
                )
              }) : null
            }
          </ul>
        </div>
        <div className={styles.submit} onClick={this.postInform}>
          提交
        </div>
      </div>
    )
  }
}
