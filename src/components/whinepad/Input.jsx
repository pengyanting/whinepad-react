import React from 'react'
import styles from '../../public/css/Input.css'
const Input = (props) => {
  let input = null
  switch (props.type) {
    case 'text':
      input = <input name={props.name} value={props.value} type="text" onChange={(e) => props.onChange(e)}/>
      break
    case 'textarea':
      input = <textarea name={props.name} value={props.value} cols="20" rows="4" onChange={(e) => props.onChange(e)}></textarea>
      break
    case 'number':
      input = <input name={props.name} value={props.value} type="number" placeholder="2017" min='1900' onChange={(e) => props.onChange(e)}/>
      break
    case 'select':
      const options = props.options.map((item, index) => {
        return <option key={index} value={item.value} defaultValue={props.value === item.value ? 'selected' : false}>{item.value}</option>
      })
      input = <select name={props.name} value={props.value} onChange={(e) => props.onChange(e)}>{options}</select>
  }
  return (
    <div>
      <label>{props.label}</label>
      {input}
    </div>
  )
}

export default Input
