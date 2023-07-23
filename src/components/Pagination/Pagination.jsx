import React from "react"
import styles from "./Pagination.module.css"
import { useSelector } from "react-redux"
import { getPageCount } from "../../utils"
import PaginationItem from "./PaginationItem"
import { useParams, Link} from "react-router-dom"

const Pagination = () => {

    const totalCount = useSelector(state => state.pagination.totalCount)
    const limit = useSelector(state => state.pagination.limit)
    const {page} = useParams()
    const{pages, pageCount} = getPageCount(totalCount, limit, +page)

    return (
        <div className={styles.pagination}>
            <Link 
                className={styles.link_go}
                to={page > 1 ? `/${page - 1}` : `/${page}`}
            >
                Назад
            </Link>
                <ul className={styles.pagination_items}>
                    {pages.map((currentPage) =>  
                       <PaginationItem
                            key={currentPage}
                            to={currentPage}
                        >
                            {currentPage}
                        </PaginationItem>
                    )}
                </ul>
            <Link
                className={styles.link_go} 
                to={page < pageCount ? `/${+page + 1}` : `/${page}`}
            >
                Далее
            </Link>
            
        </div>
    )
}

export default Pagination
