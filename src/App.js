import Table from './components/Table/Table'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Container from './components/Container/Container'
import { TABLE_ROUTE } from './utils/consts'

function App() {
	return (
		<BrowserRouter basename='/business-sector-test'>
			<Routes>
				<Route path='/' element={<Container />}>
					<Route
						index
						element={<Navigate to={`${TABLE_ROUTE}/${1}`} />}
					/>
					<Route path={`${TABLE_ROUTE}/:page`} element={<Table />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
