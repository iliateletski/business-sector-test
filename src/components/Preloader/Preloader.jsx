import React from 'react'
import styles from './Preloader.module.css'

const Preloader = () => {
	return (
		<tr className={styles.loader_inner}>
			<td className={styles.loader_box}>
				<div className={styles.loader}>loading</div>
			</td>
		</tr>
	)
}

export default Preloader
