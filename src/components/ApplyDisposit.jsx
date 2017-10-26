import React, { Component } from 'react'
import Head from './common/Head'
import * as styles from '../public/scss/allDisposit.scss'
import template from './common/template'
import { Tool } from '../libs/tool'
/**
 * 申请提现
 */
class ApplyDisposit extends Component {
  constructor (props) {
    super()
    this.state = {
      allDisposit: 0,
      disposit: 0
    }
    this.dispositChange = (e) => {
      let value = e.target.value
      if ((/^\d*?\.?\d{0,2}?$/gi).test(value)) {
        if ((/^0+[1-9]+/).test(value)) {
          value = value.replace(/^0+/, '')
        }
        if ((/^0+0\./).test(value)) {
          value = value.replace(/^0+/, '0')
        }
        value = value.replace(/^\./gi, '0.')
        this.state.oldValue = value
        this.state.inputLength = value.length
      }
      if (value.indexOf('.') > -1) {
        let startIndex = value.indexOf('.')
      }
      this.setState({disposit: value})
    }
    this.submit = () => {
      let money = this.state.disposit !== '' ? parseFloat(this.state.disposit) : 0
      if (money > 200) {
        Tool.alert('每次最多提现200元')
      } else if (money > parseFloat(this.state.allDisposit)) {
        Tool.alert('您的提现金额超出余额')
      } else if (money < 0) {
        Tool.alert('请输入提现金额')
      } else {
        this.props.getData('/shopro/data/applysuccess', {
          money: money
        }, (res) => {
          if (res.http_code === 200) {
            Tool.alert('您的提现申请已提交成功！', '款项将于5-7个工作日转入您的微信钱包')
            let deposit = this.state.allDisposit - money
            deposit = deposit.toString()
            if (/\./gi.test(deposit)) {
              deposit = parseFloat(deposit)
              deposit = deposit.toFixed(2)
            }
            deposit = parseFloat(deposit)
            this.setState({money: '', allDisposit: deposit})
          } else {
            Tool.alert(res.data.msg)
          }
        }, 'applyRecord')
      }
    }
  }
  componentWillUpdate (nextPros, nextState) {
    if (this.props !== nextPros) {
      let { data } = nextPros.state
      if (data && data.data && data.data.data) {
        this.state.allDisposit = data.data.data.balance
      }
    }
  }
  render () {
    return (
      <div>
        <Head nav applyRecord title='余额提现'/>
        <div className={styles.info}>您的可提现金额为：￥{this.state.allDisposit}</div>
        <div className={styles.disposit}>
          <p>请输入提现金额（元）</p>
          <p>￥
            <input type="text" maxLength='4' value={this.state.disposit} onChange={this.dispositChange}/>
          </p>
        </div>
        <div className={styles.submit} onClick={this.submit}>申请提现</div>
      </div>
    )
  }
}
export default template({
  id: 'applydisposit',
  component: ApplyDisposit,
  url: '/shopro/data/applybalance'
})
