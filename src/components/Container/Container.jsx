import React from 'react'
import { Outlet } from 'react-router-dom'

import Pagination from '../Pagination/Pagination'
import Search from '../Search/Search'
import styles from './Container.module.css'

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
