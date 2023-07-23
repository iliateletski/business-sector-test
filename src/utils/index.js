export const getPageCount = (totalCount, limit, curentPage) => {
    const pageCount = Math.ceil(totalCount / limit)
    const pages = []

    if(pageCount > 5) {
        if(curentPage > 3) {
            const startI = curentPage - 2 
            for(let i = startI; i < curentPage + 3; i++) {
                if(i === startI) pages.push(1, '...')
                pages.push(i)
                if(i === pageCount) break
            }        
        } else {
            for(let i = 1; i <= 5; i++) {
                pages.push(i)
                if(i === pageCount) break
            }        
        }
    } else {
        for(let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
    }
    
    return {pages, pageCount}
}