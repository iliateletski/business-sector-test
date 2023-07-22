export const getPageCount = (totalCount, limit) => {
    const pageCount = Math.ceil(totalCount / limit)
    const pages = [];

    for(let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return {pages, pageCount}
}