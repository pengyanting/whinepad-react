import React, { Component } from 'react'
import Head from './common/Head'
import * as styles from '../public/scss/selectProducts.scss'
import classNames from 'classnames/bind'

let cn = classNames.bind(styles)
/**
 * 选择商品
 */
class List extends Component {
  constructor (props) {
    super()
  }
  render () {
    let listItem = this.props.list.map((item, index) => {
      return <ListItem key={index} item={item} index={index}/>
    })
    return (
      <ul className={styles.list}>{listItem}</ul>
    )
  }
}
class ListItem extends Component {
  constructor (props) {
    super()
    this.state = {
      productCount: 0,
      chooseState: false
    }
    this.handleChange = (e) => {
      this.setState({ productCount: e.target.value })
    }
    this.getCount = () => {}
  }
  render () {
    let { item, id } = this.props
    let productCount = this.state.productCount
    return (
      <li className={styles.list_item}>
        <div className={cn('name', { check: this.state.chooseState })}>{item.productName}</div>
        <div className={styles.count}>
          <button disabled={productCount > 0 ? '' : 'disabled'} className={cn('button_style', { 'reduce': productCount > 0, 'reduce_no': productCount <= 0 })} onClick={this.getCount.bind(this, 'reduce')}></button>
          <input className={styles.count_name} type='text' maxLength='4' value={productCount} onClick={this.handleChange.bind(this)}/>
          <button className={cn('button_style', 'add')} onClick={this.getCount.bind(this, 'add')}></button>
        </div>
      </li>
    )
  }
}
export default class SelectProducts extends Component {
  constructor (props) {
    super()
    this.state = {
      productList: [{ productName: '111' }, { productName: '222' }]
    }
  }
  render () {
    return (
      <div>
        <Head goback save title='销售商品'/>
        {
          this.state.productList.length > 0 ? <List list={this.state.productList}></List> : null
        }
      </div>
    )
  }
}
