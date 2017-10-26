import React, { Component, PropTypes } from 'react'
import Head from './common/Head'
import * as styles from '../public/scss/selectProducts.scss'
import classNames from 'classnames/bind'
import pureRender from 'pure-render-decorator'
import { History, Link } from 'react-router'
import { connect } from 'react-redux'
import template from './common/template'
import { is, fromJS } from 'immutable'
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
      return <ListItem key={index} {...item} index={index}/>
    })
    return (
      <ul className={styles.list}>{listItem}</ul>
    )
  }
}
class ListItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      productCount: this.props.num,
      chooseState: this.props.chooseState
    }
    this.handleChange = (e) => {
      if (this.state.chooseState) {
        let newValue = e.target.value
        newValue = Number(newValue.replace((/\D+/gi), ''))
        this.setState({
          productCount: newValue
        })
        this.context.recordState(this.props.id, this.state.chooseState, newValue, this.props.index)
      }
    }
    this.getCount = (type) => {
      if (this.state.chooseState) {
        let num = this.state.productCount
        if (type === 'reduce' && num > 0) {
          num = num - 1
          this.setState({ productCount: num })
        } else if (type === 'add') {
          num = num + 1
          this.setState({ productCount: num })
        }
        this.context.recordState(this.props.id, this.state.chooseState, num, this.props.index)
      }
    }
    this.changeState = () => {
      let status = !this.state.chooseState
      this.setState({ chooseState: status })
      this.context.recordState(this.props.id, status, this.state.productCount, this.props.index)
    }
  }
  shouldComponentUpdate (nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }
  render () {
    let { productName, id } = this.props
    let productCount = this.state.productCount
    return (
      <li className={styles.list_item}>
        <div className={cn('name', { check: this.state.chooseState }, 'ellips')} onClick={this.changeState.bind(this)}>{productName}</div>
        <div className={styles.count}>
          <button disabled={productCount > 0 ? '' : 'disabled'} className={cn('button_style', { 'reduce': productCount > 0, 'reduce_no': productCount <= 0 })} onClick={this.getCount.bind(this, 'reduce')}></button>
          <input className={styles.count_num} type='text' maxLength='4' value={productCount} onChange={this.handleChange}/>
          <button className={cn('button_style', 'add')} onClick={this.getCount.bind(this, 'add')}></button>
        </div>
      </li>
    )
  }
}
ListItem.contextTypes = {
  recordState: React.PropTypes.any,
  store: React.PropTypes.any
}
class SelectProducts extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      productList: [],
      params: '', // 传入的参数
      shouldUpdate: false, // 是否可以更新
      num: 0,
      requestID: null
    }
    this.productState = (id, chooseState, num, index) => {
      this.state.productList[index].chooseState = chooseState
      this.state.productList[index].num = num
      this.props.saveProductlist(this.state.productList)
    }
  }
  getChildContext () {
    return {
      recordState: this.props.recordState
    }
  }
  componentWillReceiveProps (nextProps) { // 在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用。
    this.state.shouldUpdate = false
    if (this.props !== nextProps) {
      let data = nextProps.state.data
      if (nextProps.producRecord.productList && this.state.productList.length === 0) {
        this.state.shouldUpdate = true
        this.state.productList = nextProps.producRecord.productList
      } else if (data && data.data && data.data.data && this.state.productList.length === 0) {
        this.state.shouldUpdate = true
        let list = data.data.data
        this.props.newProductData(list)
        list.forEach((item, index) => {
          this.state.productList[index] = {}
          this.state.productList[index]['productName'] = item.product_name
          this.state.productList[index]['chooseState'] = false
          this.state.productList[index]['num'] = 1
          this.state.productList[index]['id'] = item.product_id
        })
      }
      console.log(nextProps.producRecord)
      if (nextProps.producRecord.id) {
        let { producRecord } = nextProps
        this.productState(producRecord.id, producRecord.chooseState, producRecord.num, producRecord.index)
      }
    }
  }
  componentWillMount () { // 在初始化渲染执行之前立刻调用。
    console.log(this.props.location.search)
    this.state.params = this.props.location.search
  }
  componentWillUnmount () { // 在组件从 DOM 中移除的时候立刻被调用。
    cancelAnimationFrame(this.state.requestID)
  }
  render () {
    return (
      <div>
        <Head goback save title='销售商品' params={this.state.params}/>
        {
          this.state.productList.length > 0 ? <List list={this.state.productList}></List> : null
        }
      </div>
    )
  }
}
SelectProducts.childContextTypes = {
  recordState: React.PropTypes.any // proptypes react的类型检测，这里可以是任何类型
}
export default template({
  id: 'chooseProducts', // 应用关联使用的redux
  component: SelectProducts, // 接收数据的组件入口
  url: '/shopro/data/products'
})
