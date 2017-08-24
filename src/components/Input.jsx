import React from 'react'
const Input = (props) => {
  return (
    <form>
      <div>
        <label htmlFor="listInput"></label>
        <input
          type="text"
          className='form-control'
          placeholder='Add New Item'
          id='listItemInput'
          onChange={props.onChange}
          value={props.value}/>
        <button className='btn btn-primary' onClick={props.onSubmit}>Add Item</button>
      </div>
    </form>
  )
}

export default Input
