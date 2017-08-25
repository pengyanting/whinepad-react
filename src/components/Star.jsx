import React from 'react'
import styles from '../public/css/Star.css'
class Star extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      num: 3
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleMove = this.handleMove.bind(this)
  }
  handleClick (index) {
    this.setState({
      num: index + 1
    })
  }
  handleMove (index) {
    this.setState({
      num: index + 1
    })
  }
  render () {
    let item = []
    for (let i = 0; i < 5; i++) {
      item.push(
        <li
          key={i}
          className={ i < this.state.num ? styles.pos_0 : styles.pos}
          onClick={() => this.handleClick(i)}
          onMouseMove={() => this.handleMove(i)}>
        </li>)
    }
    return (
      <ul>{item}</ul>
    )
  }
}

export default Star
