import React, {Component, PropTypes} from 'react'
import pureRender from 'pure-render-decorator'
import { connect } from 'react-redux'
import { is, fromJS } from 'immutable'
import * as action from '../../redux/action/index'

const Main = mySeting => {
  let seting = {
    id: '', // 应用唯一id表示
    url: '', // 请求地址
    data: {}, // 发送给服务器的数据
    component: <div></div> // 数据回调给的组件
  }

  for (let key in mySeting) {
    seting[key] = mySeting[key]
  }

  class Index extends Component {
    // 如果babel设置为es6的转码方式，会报错，因为定义静态属性不属于es6，而在es7的草案中。ES6的class中只有静态方法，没有静态属性。
    // static defaultProps = { seting }
    constructor (props) {
      super(props, connect)
    }
    render () {
      return <this.props.seting.component {...this.props} state={this.props.state.toJS()}/>
    }

    componentDidMount () { // 获取数据
      if (this.props.seting.url) {
        this.props.fetchPosts(this.props.seting.url, this.props.seting.data)
      }
    }

    componentWillReceiveProps (nextProps) {}

    shouldComponentUpdate (nextProps, nextState) {
      if (nextProps.state.get('isFetching')) {
        return false
      }
      return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
    }
  }
  // 由于是用ES6 class语法创建组件，其内部只允许定义方法，而不能定义属性，class的属性只能定义在class之外。所以defaultProps要写在组件外部。
  // 其他解决办法 http://www.jianshu.com/p/29a025128990
  Index.defaultProps = { seting }
  // mapStateToProps and mapDispatchToProps
  return connect(state => { // 将顶层组件与模版绑定后return回去，配置路由的时候用的就是和redux绑定的组件，所以其实每个路由匹配的都是同一个组件，只不过这个组件的内容不同
    let {producRecord, saleRecord, requestData, testData} = state
    return {
      state: state['fetchData'],
      producRecord,
      saleRecord,
      requestData
    }
  }, action)(Index) // 连接redux
}

export default Main
