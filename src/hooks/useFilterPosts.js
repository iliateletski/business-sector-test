import { useMemo } from "react"

export const useSortPosts = (posts, sortParam) => {
    const sortedPosts = useMemo(() => {
        if(sortParam) {
            return (
                typeof(posts[0][sortParam]) === 'number'
                ? [...posts].sort((a, b) => b[sortParam] - a[sortParam])
                : [...posts].sort((a, b) => a[sortParam].localeCompare(b[sortParam])) 
            )    
        }
        return posts
    }, [posts, sortParam])

    return sortedPosts
}

export const useFilterPosts = (posts, sortParam, query) => {
    
    const sortedPosts = useSortPosts(posts, sortParam)

    const check = (value) => {
        if(typeof(value) !== 'string') return false
        return value.toLowerCase().includes(query.toLowerCase())
    } 

    const filterPosts = useMemo(() => {
        return sortedPosts.filter(post => check(`${post.id}`) || check(`${post.title}`) || check(`${post.body}`))
    }, [query, sortedPosts])

    return filterPosts
}