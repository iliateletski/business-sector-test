import React from 'react'
import styles from './TableItem.module.css'

const TableItem = ({ post }) => {
	return (
		<tr className={styles.table_item}>
			<td className={styles.table_item_td}>{post.id}</td>
			<td className={styles.table_item_td}>{post.title}</td>
			<td className={styles.table_item_td}>{post.body}</td>
		</tr>
	)
}

export default TableItem
