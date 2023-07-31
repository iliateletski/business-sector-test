export const getPaginationList = (totalCount, limit, curentPage) => {
	const pagesTotal = Math.ceil(totalCount / limit)
	const pages = [1]

	if (curentPage > pagesTotal) {
		pages.push(2, 3, 4, 5)
	} else {
		let startPage = 2
		if (pagesTotal > 5 && curentPage > 3) {
			pages.push('...')
			startPage = Math.min(curentPage - 1, pagesTotal - 3)
		}
		const endPage = startPage + 4
		for (startPage; startPage !== endPage; startPage++) {
			pages.push(startPage)
		}
	}
	return { pages, pagesTotal }
}

const check = (value, query) => {
	if (typeof value !== 'string') return false
	return value.toLowerCase().includes(query.toLowerCase())
}

export const filterAndSort = (posts, sortParam, query) => {
	const filtered = query
		? posts.filter(
				post =>
					check(`${post.id}`, query) ||
					check(`${post.title}`, query) ||
					check(`${post.body}`, query)
		  )
		: [...posts]

	if (!filtered.length) return filtered

	if (sortParam) {
		return typeof filtered[0][sortParam] === 'number'
			? [...filtered].sort((a, b) => b[sortParam] - a[sortParam])
			: [...filtered].sort((a, b) => a[sortParam].localeCompare(b[sortParam]))
	}

	return filtered
}
