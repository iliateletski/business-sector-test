import { filterAndSort } from 'utils/index'
import { getPaginationList } from 'utils/index'

const testPosts = [
	{
		userId: 1,
		id: 1,
		title: 'good title A',
		body: 'body C'
	},
	{
		userId: 1,
		id: 2,
		title: 'good title B',
		body: 'body D'
	},
	{
		userId: 1,
		id: 3,
		title: 'bad title C',
		body: 'body B'
	},
	{
		userId: 1,
		id: 4,
		title: 'bad title D',
		body: 'body A'
	}
]

const reversed = [...testPosts].reverse()
const sortedById = reversed
const sortedByTitle = [testPosts[2], testPosts[3], testPosts[0], testPosts[1]]
const sortedByBody = [testPosts[3], testPosts[2], testPosts[0], testPosts[1]]
const filtered = [testPosts[0], testPosts[1]]
const sortedByIdAndFiltered = [testPosts[0]]

describe('filterAndSort', () => {
	test('sort', () => {
		expect(filterAndSort(testPosts, 'id')).toEqual(sortedById)
		expect(filterAndSort(testPosts, 'title')).toEqual(sortedByTitle)
		expect(filterAndSort(testPosts, 'body')).toEqual(sortedByBody)
	})

	test('filter', () => {
		expect(filterAndSort(testPosts, '', 'good title')).toEqual(filtered)
	})

	test('filter and sort', () => {
		expect(filterAndSort(testPosts, 'id', 'title a')).toEqual(
			sortedByIdAndFiltered
		)
	})
})

test('getPaginationList', () => {
	expect(getPaginationList(100, 10, 1)).toEqual({
		pages: [1, 2, 3, 4, 5],
		pagesTotal: 10
	})
	expect(getPaginationList(100, 10, 4)).toEqual({
		pages: [1, '...', 3, 4, 5, 6],
		pagesTotal: 10
	})
	expect(getPaginationList(100, 10, 7)).toEqual({
		pages: [1, '...', 6, 7, 8, 9],
		pagesTotal: 10
	})
	expect(getPaginationList(100, 10, 10)).toEqual({
		pages: [1, '...', 7, 8, 9, 10],
		pagesTotal: 10
	})
	expect(getPaginationList(100, 10, 12)).toEqual({
		pages: [1, 2, 3, 4, 5],
		pagesTotal: 10
	})
	expect(getPaginationList(100, 10, -1)).toEqual({
		pages: [1, 2, 3, 4, 5],
		pagesTotal: 10
	})
})
