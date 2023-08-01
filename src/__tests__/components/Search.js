import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as reduxHooks from 'react-redux'

import Search from 'components/Search/Search'

import * as actions from 'store/appReducer'

jest.mock('react-redux')

const mockedUseDispatch = jest.spyOn(reduxHooks, 'useDispatch')
const mockedSetQuery = jest.spyOn(actions, 'setQuery')

describe('Search component', () => {
	test('Snapshot test', () => {
		render(<Search />)
		const search = screen.getByTestId('search')
		expect(search).toMatchSnapshot()
	})

	test('Shoult dispatch actions', () => {
		const dispatch = jest.fn()
		mockedUseDispatch.mockReturnValue(dispatch)

		render(<Search />)

		const input = screen.getByTestId('input')
		userEvent.type(input, 'good')

		expect(dispatch).toBeCalledTimes(4)
		expect(mockedSetQuery).toHaveBeenCalledWith('good')
	})
})
