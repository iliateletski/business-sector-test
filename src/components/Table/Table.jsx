import { fetchPosts } from 'http'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { filterAndSort } from 'utils'

import { LIMIT, TABLE_ROUTE } from 'utils/consts'

import { setSortParam, setTotalCount } from 'store/appReducer'

import Preloader from '../Preloader/Preloader'
import TableHeader from '../TableHeader/TableHeader'
import TableItem from '../TableItem/TableItem'
import styles from './Table.module.css'

const Table = () => {
	const [posts, setPosts] = useState([])
	const [isPostsLoading, setIsPostsLoading] = useState(false)
	const { page } = useParams()
	const dispatch = useDispatch()
	const query = useSelector(state => state.query)
	const sortParam = useSelector(state => state.sortParam)
	const sortedAndFilteredPosts = filterAndSort(posts, sortParam, query)
	const navigate = useNavigate()

	useEffect(() => {
		setIsPostsLoading(true)
		fetchPosts(page, LIMIT)
			.then(({ data, headers }) => {
				if (page > headers['x-total-count'] / LIMIT) {
					navigate(`${TABLE_ROUTE}/1`)
				} else {
					setPosts(data)
					dispatch(setTotalCount(headers['x-total-count']))
				}
			})
			.catch(e => alert(e.message))
			.finally(() => setIsPostsLoading(false))
	}, [page, dispatch, navigate])

	return (
		<div className={styles.table_box}>
			<table className={styles.table}>
				<TableHeader onClick={value => dispatch(setSortParam(value))} />
				<tbody className={styles.table_body}>
					{isPostsLoading ? (
						<Preloader />
					) : (
						sortedAndFilteredPosts.map(post => (
							<TableItem key={post.id} post={post} />
						))
					)}
				</tbody>
			</table>
		</div>
	)
}

export default Table
