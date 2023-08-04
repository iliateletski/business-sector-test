import { render } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

export const renderWithRouter = (
	{ routes = [], initialEntries = [] } = null
) => {
	return render(
		<MemoryRouter initialEntries={initialEntries}>
			<Routes>
				{routes.map(route => (
					<Route path={route.path} element={route.element} />
				))}
			</Routes>
		</MemoryRouter>
	)
}
