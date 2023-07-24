import React, { useEffect, useState } from 'react'
import TableItem from '../TableItem/TableItem'
import TableHeader from '../TableHeader/TableHeader'
import styles from './Table.module.css'
import { useParams } from 'react-router-dom'
import { fetchPosts } from '../../http'
import { useDispatch, useSelector } from 'react-redux'
import { setSortParam, setTotalCount } from '../../store/appReducer'
import { filterAndSort } from '../../utils/index'
import { LIMIT } from '../../utils/consts'
import Preloader from '../Preloader/Preloader'

const Table = () => {
	const [posts, setPosts] = useState([])
	const [isPostsLoading, setIsPostsLoading] = useState(true)
	const { page } = useParams()
	const dispatch = useDispatch()
	const query = useSelector(state => state.query)
	const sortParam = useSelector(state => state.sortParam)
	const sortedAndFilteredPosts = filterAndSort(posts, sortParam, query)

	useEffect(() => {
		fetchPosts(page, LIMIT)
			.then(({ data, headers }) => {
				setPosts(data)
				dispatch(setTotalCount(headers['x-total-count']))
			})
			.catch(e => alert(e.message))
			.finally(setIsPostsLoading(false))
	}, [page, dispatch])

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
