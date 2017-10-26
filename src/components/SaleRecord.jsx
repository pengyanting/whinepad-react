import React, { Component, PropTypes } from 'react'
import Head from './common/Head'
import * as styles from '../public/scss/saleRecord.scss'
import template from './common/template'
import classnames from 'classnames/bind'
import Tool from '../libs/tool'
let cn = classnames.bind(styles)
class List extends Component {
  render () {
    return (
      <ul>
        {
          this.props.list.map((item, index) => {
            return (
              <ListItem {...item} key={index}/>
            )
          })
        }
      </ul>
    )
  }
}
class ListItem extends Component {
  render () {
    let { created_at } = this.props
    let product = this.props.product.map((item, index) => {
      return (
        <span key={index} style={{marginRight: '0.875rem'}}>{item.product_name}</span>
      )
    })
    return (
      <li className={styles.list_item}>
        <div className={styles.list_top}>
          <span>创建时间：{ this.props.created_at }</span>
          <span style={{color: 'red'}}>{this.props.type_name}</span>
        </div>
        <div className={styles.list_middle}>
          <div className={styles.list_order}>
            <span>客<span style={{display: 'inline-block', width: '1.3rem'}}></span>户：</span>
            <span style={{marginRight: '0.875rem'}}>{this.props.customers_name}</span>
            <span>{this.props.customers_phone}</span>
          </div>
          <div className={styles.list_order}>购买商品：
            {product}
          </div>
          <div className={styles.list_order}>
            <span>订单金额：</span>
            <span style={{marginRight: '0.875rem', color: 'red'}}>￥{this.props.sales_money}</span>
            <span>佣金：</span>
            <span style={{color: 'red'}}>￥{this.props.commission}</span>
          </div>
        </div>
        <div className={styles.failed_reason}>等待管理员审核，审核通过后，佣金将结算至账户</div>
      </li>
    )
  }
}
class SaleRecord extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      chooseClass: 'wait',
      data: [],
      currentPage: 1,
      totalPage: 1
    }
    this.chooseStatus = (e) => {
      let name = null
      if (e.target.children[0]) {
        name = e.target.children[0].getAttribute('name')
      } else {
        name = e.target.getAttribute('name')
      }
      this.setState({ chooseClass: name })
      let type = ''
      if (name === 'failed') {
        type = 'FAILED'
      } else if (name === 'wait') {
        type = 'UNAUDIT'
      } else if (name === 'pass') {
        type = 'PASS'
      }
      this.props.getData('/shopro/data/record', { page: 1, type: type }, (res) => {
        if (res.http_code === 200) {
          this.setState({
            data: res.data.data,
            currentPage: 1,
            totalPage: res.data.totalPage
          })
        } else {
          Tool.alert(res.data.msg)
        }
      }, 'changeType')
    }
  }
  getChildContext () {
    return {
      deleteItem: this.props.deleteItem,
      getData: this.props.getData
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.saleRecord.index !== undefined) {
      this.deleteInform(nextProps.saleRecord.index)
    } else {
      let { data } = nextProps.state
      if (data) {
        this.state.data = data.data.data || []
        this.state.currentPage = data.data.currentPage || 1
        this.state.totalPage = data.data.totalPage || 1
      }
    }
  }
  render () {
    let chooseClass = this.state.chooseClass
    return (
      <div>
        <Head goback title='销售记录'/>
        <nav className={styles.nav}>
          <ul onClick={this.chooseStatus}>
            <li className={cn({item_choose: chooseClass === 'failed'})}><p name='failed'>未通过</p><span></span></li>
            <li className={cn({item_choose: chooseClass === 'wait'})}><p name='wait'>待审核</p><span></span></li>
            <li className={cn({item_choose: chooseClass === 'pass'})}><p name='pass'>已通过</p></li>
          </ul>
        </nav>
        {
          this.state.data.length > 0 ? <List list={this.state.data}/> : null
        }
      </div>
    )
  }
}
SaleRecord.PropTypes = {
  saleRecord: React.PropTypes.object.isRequired
}
SaleRecord.childContextTypes = {
  deleteItem: React.PropTypes.any,
  getData: React.PropTypes.any
}
export default template({
  component: SaleRecord,
  id: 'saleRecord',
  url: '/shopro/data/record',
  data: {
    page: 1,
    type: 'UNAUDIT'
  }
})
