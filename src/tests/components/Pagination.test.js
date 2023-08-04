import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import * as reduxHooks from 'react-redux'
import { renderWithRouter } from 'tests/helpers/helpers'

import Pagination from 'components/Pagination/Pagination'

import * as functions from 'utils/index'

const testRoutes = {
	routes: [{ path: '/page/:page', element: <Pagination /> }],
	initialEntries: ['/page/1']
}

jest.mock('react-redux')
jest.mock('utils/index')

const mockUseSelector = jest.spyOn(reduxHooks, 'useSelector')
const mockGetPaginationList = jest.spyOn(functions, 'getPaginationList')
describe('Pagination component', () => {
	test('Page 1 active', () => {
		mockUseSelector.mockReturnValue(100)
		mockGetPaginationList.mockReturnValue({
			pages: [1, 2, 3, 4, 5],
			pageCount: 10
		})

		renderWithRouter(testRoutes)

		const pagination = screen.getByTestId('Pagination')
		expect(pagination).toMatchSnapshot()
	})

	test('Page 4 active', () => {
		mockUseSelector.mockReturnValue(100)
		mockGetPaginationList.mockReturnValue({
			pages: [1, '...', 3, 4, 5, 6],
			pageCount: 10
		})

		renderWithRouter({ ...testRoutes, initialEntries: ['/page/4'] })

		const pagination = screen.getByTestId('Pagination')
		expect(pagination).toMatchSnapshot()
	})

	test('Page 10 active', () => {
		mockUseSelector.mockReturnValue(100)
		mockGetPaginationList.mockReturnValue({
			pages: [1, '...', 7, 8, 9, 10],
			pageCount: 10
		})

		renderWithRouter({ ...testRoutes, initialEntries: ['/page/10'] })

		const pagination = screen.getByTestId('Pagination')
		expect(pagination).toMatchSnapshot()
	})
})
