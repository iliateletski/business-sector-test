import React from 'react'
import { NavLink } from 'react-router-dom'

import { TABLE_ROUTE } from 'utils/consts'

import styles from './Pagination.module.css'

const PaginationItem = ({ children, to }) => {
	return (
		<li className={styles.pagination_item}>
			{typeof children === 'number' ? (
				<NavLink
					className={({ isActive }) => (isActive ? styles.active : '')}
					to={`${TABLE_ROUTE}/${to}`}
				>
					{children}
				</NavLink>
			) : (
				<span>{children}</span>
			)}
		</li>
	)
}

export default PaginationItem
