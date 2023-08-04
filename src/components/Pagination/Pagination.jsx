import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { TABLE_ROUTE } from 'utils/consts'
import { LIMIT } from 'utils/consts'
import { getPaginationList } from 'utils/index'

import styles from './Pagination.module.css'
import PaginationItem from './PaginationItem'

const Pagination = () => {
	const totalCount = useSelector(state => state.totalCount)
	const { page } = useParams()
	const { pages, pageCount } = getPaginationList(totalCount, LIMIT, +page)

	return (
		<div className={styles.pagination} data-testid='Pagination'>
			<Link
				className={styles.link_go}
				to={`${TABLE_ROUTE}/${page > 1 ? page - 1 : page}`}
			>
				Назад
			</Link>
			<ul className={styles.pagination_items}>
				{pages.map(currentPage => (
					<PaginationItem key={currentPage} to={currentPage}>
						{currentPage}
					</PaginationItem>
				))}
			</ul>
			<Link
				className={styles.link_go}
				to={`${TABLE_ROUTE}/${page < pageCount ? +page + 1 : page}`}
			>
				Далее
			</Link>
		</div>
	)
}

export default Pagination
