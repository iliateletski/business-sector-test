import React from 'react'
import styles from './Pagination.module.css'
import { NavLink } from 'react-router-dom'
import { TABLE_ROUTE } from '../../utils/consts'

const PaginationItem = ({ children, to }) => {
	return (
		<li className={styles.pagination_item}>
			{typeof children === 'number' ? (
				<NavLink
					className={({ isActive }) =>
						isActive ? styles.active : ''
					}
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
