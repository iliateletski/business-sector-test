export const getPaginationList = (totalCount, limit, curentPage) => {
	const pageCount = Math.ceil(totalCount / limit)
	const pages = []

	if (pageCount > 5) {
		if (curentPage > 3) {
			const startI = curentPage - 1
			for (let i = startI; i < curentPage + 3; i++) {
				if (i === startI) pages.push(1, '...')
				pages.push(i)
				if (i === pageCount) break
			}
		} else {
			for (let i = 1; i <= 5; i++) {
				pages.push(i)
				if (i === pageCount) break
			}
		}
	} else {
		for (let i = 1; i <= pageCount; i++) {
			pages.push(i)
		}
	}

	return { pages, pageCount }
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
