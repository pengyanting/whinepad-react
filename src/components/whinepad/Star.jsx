import React from 'react'
import styles from '../../public/css/Star.css'
class Star extends React.Component {
  render () {
    let item = []
    for (let i = 0; i < 5; i++) {
      item.push(
        <li
          key={i}
          className={ i < this.props.score ? styles.pos_0 : styles.pos}
          onClick={(e) => { if (this.props.disabled) { return } this.props.click(i) }}
          onMouseMove={() => { if (this.props.disabled) { return } this.props.move(i) }}
          onMouseOut={() => { if (this.props.disabled) { return } this.props.out(i) }}>
        </li>)
    }
    return (
      <ul class='star'>{item}</ul>
    )
  }
}

export default Star
