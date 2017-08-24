import React from 'react'
import styles from '../public/css/List.css'
const List = (props) => {
  const list = props.list.map((item, index) => {
    return (
      <tr key={index}>
        <td className={styles.td_name}>{item.name}</td>
        <td className={styles.td_year}>{item.year}</td>
        <td className={styles.td_grape}>{item.grape}</td>
        <td className={styles.td}>{item.rating}</td>
        <td>
          <div className={styles.td_action}>
            <span>查看</span>
            <span>编辑</span>
            <span onClick={() => props.del(index)}>删除</span>
          </div>
        </td>
      </tr>
    )
  })
  return (
    <table>
      <thead>
        <tr>
          <th className={styles.name}>Name</th>
          <th className={styles.year}>Year</th>
          <th className={styles.grape}>Grape</th>
          <th className={styles.rating}>Rating</th>
          <th className={styles.action}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {list}
      </tbody>
    </table>
  )
}

export default List
