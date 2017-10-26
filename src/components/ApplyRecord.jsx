import React, { Component } from 'react'
import Head from './common/Head'
import template from './common/template'
import * as styles from '../public/scss/applyRecord.scss'
import classnames from 'classnames/bind'
let cn = classnames.bind(styles)
/**
 * 提现记录
 */
class Month extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: this.props.list
    }
    this.handleClick = (index, item) => {
      this.setState({
        list: [...this.state.list.slice(0, index), Object.assign(item, { isShow: !item.isShow }), ...this.state.list.slice(index + 1)]
      })
    }
  }
  componentWillMount () {
    this.state.list[0].isShow = true
  }
  render () {
    return (
      <div className={styles.box}>
        {
          this.state.list.map((item, index) => {
            return (
              <div key={index}>
                <div className={styles.title} onClick={() => { this.handleClick(index, item) }}>
                  <span>{item.month}</span>
                  <span>{ !item.isShow ? '￥' + item.totalMoney : null}</span>
                </div>
                {
                  item.isShow ? <ListItem data={item.applyList}/> : null
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}
class ListItem extends Component {
  render () {
    return (
      <div>
        {
          this.props.data.map((item, index) => {
            return <div key={index} className={styles.item}>
              <div className={cn('item_line', { 'complete': item.to_account_status === 1, 'no_complete': item.to_account_status === 2 })}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={styles.time_title}>
                <span>申请时间</span>
                <span>申请处理中</span>
                <span>到账时间</span>
              </div>
              <div className={styles.time_desc}>
                <span>{item.created_at}</span>
                <span>金额{item.money}元</span>
                <span>{item.to_account_time}</span>
              </div>
            </div>
          })
        }
      </div>
    )
  }
}
class ApplyRecord extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  getChildContext () {
    return {
      getData: this.props.getData
    }
  }
  componentWillUpdate (nextProps, nextState) {
    if (this.props !== nextProps) {
      let { data } = nextProps.state
      let newDate = new Date()
      let nowTime = newDate.getFullYear() + '-' + (newDate.getMonth() + 1)
      if (data && data.data) {
        let num = 0
        let list = data.data.balance_list
        for (let key in list) {
          this.state.data[num] = {}
          if (key === nowTime) {
            this.state.data[num]['month'] = '本月'
          } else {
            this.state.data[num]['month'] = key.replace('-', '年') + '月'
          }
          this.state.data[num]['totalMoney'] = list[key].month_money
          this.state.data[num]['isShow'] = false
          this.state.data[num]['applyList'] = list[key].data
          num++
        }
      }
    }
  }
  render () {
    return (
      <div>
        <Head goback title='提现记录'/>
        {
          this.state.data.length > 0 ? <Month list={this.state.data} /> : null
        }
      </div>
    )
  }
}
ApplyRecord.childContextTypes = {
  getData: React.PropTypes.any
}
export default template({
  id: 'applyRecord',
  component: ApplyRecord,
  url: '/shopro/data/applyrecord'
})
