import React from 'react'
import styles from './Pagination.module.css'
import { useSelector } from 'react-redux'
import { getPaginationList } from '../../utils'
import PaginationItem from './PaginationItem'
import { useParams, Link } from 'react-router-dom'
import { TABLE_ROUTE } from '../../utils/consts'
import { LIMIT } from '../../utils/consts'

const Pagination = () => {
	const totalCount = useSelector(state => state.totalCount)
	const { page } = useParams()
	const { pages, pageCount } = getPaginationList(totalCount, LIMIT, +page)

	return (
		<div className={styles.pagination}>
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
