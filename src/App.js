import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Container from 'components/Container/Container'
import Table from 'components/Table/Table'

import { TABLE_ROUTE } from 'utils/consts'

function App() {
	return (
		<div>
			<BrowserRouter basename='/business-sector-test'>
				<Routes>
					<Route path='/' element={<Container />}>
						<Route index element={<Navigate to={`${TABLE_ROUTE}/1`} />} />
						<Route path={`${TABLE_ROUTE}/:page`} element={<Table />} />
						<Route path='*' element={<Navigate to={`${TABLE_ROUTE}/1`} />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
