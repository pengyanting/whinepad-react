import React from 'react'
const List = (props) => {
  const list = props.listItem.map((item, index) => (
    <li
      key = {index}
      style={
        !item.done ? {color: '#0f0f0f'} : {color: 'red'}
      }>
      <span
        style={{height: '34px', lineHeight: '34px'}}
        onClick={() => props.onClick(index)}>
        {item.name}{item.done}
      </span>
      <button
        className='btn btn-danger pull-right'
        onClick={() => props.onDelete(index)}>
        X
      </button>
    </li>
  ))
  return (
    <div>{list}</div>
  )
}

export default List
