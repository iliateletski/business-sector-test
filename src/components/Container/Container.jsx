import React from 'react'
import styles from './Container.module.css'
import Pagination from '../Pagination/Pagination'
import Search from '../Search/Search'
import { Outlet } from 'react-router-dom'

const Container = () => {
	return (
		<div className={styles.container}>
			<Search />
			<Outlet />
			<Pagination />
		</div>
	)
}

export default Container
