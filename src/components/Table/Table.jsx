import React, { useEffect } from "react"
import { useNavigate} from "react-router-dom"
import TableItem from "../TableItem/TableItem"
import TableHeader from "../TableHeader/TableHeader"
import styles from "./Table.module.css"
import { useParams } from "react-router-dom"
import { fetchPosts } from "../../http"
import { useFetching } from "../../hooks/useFetching"
import { useDispatch, useSelector } from "react-redux"
import { setTotalCountAction } from "../../store/reducers/paginationReducer"
import { useFilterPosts } from "../../hooks/useFilterPosts"
import { setPostsAction } from "../../store/reducers/postsReducer"
import { setSortParamAction } from "../../store/reducers/filterAndSortReducer"


const Table = () => {

    const{page} = useParams()
    const dispatch = useDispatch()
    const query = useSelector(state => state.filterAndSort.query)
    const sortParam = useSelector(state => state.filterAndSort.sortParam)
    const limit = useSelector(state => state.pagination.limit)
    const posts = useSelector(state => state.posts.posts)
    const navigate = useNavigate()
    const sortedAndFilteredPosts = useFilterPosts(posts, sortParam, query)
    
    const[fetching, isPostsLoading, postsError] = useFetching( async () => {
        const{data, headers} = await fetchPosts(page, limit)
        dispatch(setPostsAction(data))
        dispatch(setTotalCountAction(headers['x-total-count']))
        navigate(`/${page}`)
    })

    useEffect(() => {
        fetching()
    }, [page])

    return (
        <table className={styles.table}>
            <TableHeader 
                onClick={(value) => dispatch(setSortParamAction(value))}
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