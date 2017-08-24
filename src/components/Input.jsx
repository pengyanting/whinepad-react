import React from 'react'
import styles from '../public/css/Input.css'
const Input = (props) => {
  let input = null
  switch (props.type) {
    case 'text':
      input = <input name={props.name} type="text" onChange={(e) => props.onChange(e)}/>
      break
    case 'textarea':
      input = <textarea name={props.name} cols="20" rows="4" onChange={(e) => props.onChange(e)}></textarea>
      break
    case 'number':
      input = <input name={props.name} type="number" placeholder="2017" min='1900' onChange={(e) => props.onChange(e)}/>
      break
    case 'select':
      const options = props.options.map((item, index) => {
        return <option key={index}>{item.value}</option>
      })
      input = <select name={props.name} onChange={(e) => props.onChange(e)}>{options}</select>
  }
  return (
    <div>
      <label>{props.label}</label>
      {input}
    </div>
  )
}

export default Input
