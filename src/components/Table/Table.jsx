import React, { useEffect, useState } from "react"
import TableItem from "../TableItem/TableItem"
import TableHeader from "../TableHeader/TableHeader"
import styles from "./Table.module.css"
import { fetchPosts } from "../../http"
import { useFetching } from "../../hooks/useFetching"
import { useDispatch, useSelector } from "react-redux"
import { setTotalCountAction } from "../../store/reducers/paginationReducer"
import { useFilterPosts } from "../../hooks/useFilterPosts"


const Table = ({filter, setFilter}) => {

    const[posts, setPosts] = useState([])
    const dispatch = useDispatch()
    const page  = useSelector(state => state.page)
    const limit  = useSelector(state => state.limit)
    const sortedAndFilteredPosts = useFilterPosts(posts, filter.sortParam, filter.query)
    
    const[fetching, isPostsLoading, postsError] = useFetching( async () => {
        const{data, headers} = await fetchPosts(page, limit)
        dispatch(setTotalCountAction(headers['x-total-count']))
        setPosts(data)
    })
    
    useEffect(() => {
        fetching()
    }, [page])
    
    return (
        <table className={styles.table}>
            <TableHeader 
                onClick={(value) => setFilter({...filter, sortParam: value})}
            />
            <tbody 
                className={styles.table_body}
            >
                {
                    sortedAndFilteredPosts.map((post) => 
                        <TableItem
                            key={post.id}
                            post={post}
                        />
                    )
                }
            </tbody>
        </table>
        )
}

export default Table