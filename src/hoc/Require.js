import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFetching } from "../hooks/useFetching"
import { fetchPosts } from "../http"
import { setTotalCountAction } from "../store/reducers/paginationReducer"
import { setPostsAction } from "../store/reducers/postsReducer"
import { Navigate } from "react-router-dom";

const Require = ({children}) => {
    
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
    const page = useSelector(state => state.pagination.page)
    const limit = useSelector(state => state.pagination.limit)

    const[fetching, isPostsLoading, postsError] = useFetching( async () => {
        const{data, headers} = await fetchPosts(page, limit)
        console.log(data)
        dispatch(setPostsAction(data))
        dispatch(setTotalCountAction(headers['x-total-count']))
        
    })

    useEffect(() => {
        fetching()
    }, [page])

    if(isPostsLoading) return <div>Загрузка</div> 

    return children ? children : <Navigate to={`/${page}`}/>
}

export default Require