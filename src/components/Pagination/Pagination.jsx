import React from "react"
import styles from "./Pagination.module.css"
import { useDispatch, useSelector } from "react-redux"
import { getPageCount } from "../../utils"
import { setPageAction } from "../../store/reducers/paginationReducer"
import PaginationItem from "./PaginationItem"


const Pagination = () => {

    const dispatch = useDispatch()
    const totalCount = useSelector(state => state.totalCount)
    const limit = useSelector(state => state.limit)
    const page = useSelector(state => state.page)
    const{pages, pageCount} = getPageCount(totalCount, limit)

    const go = (value) => {
        if(value === 'forward' && page < pageCount) {
            dispatch(setPageAction(page + 1))
            return
        }
        if(value === 'back' && page > 1) {
            dispatch(setPageAction(page - 1))
            return
        }
        if(typeof value === 'number') {
            dispatch(setPageAction(value))
        }
    }
    
    console.log(page)

    return (
        <div className={styles.pagination}>
            <button 
                className={styles.btn_go}
                value='back'
                onClick={(e) => go(e.target.value)}
            >
                Назад
            </button>
                <div className={styles.pagination_items}>
                    {pages.map((currentPage, i) => 
                        <PaginationItem
                            key={i}
                            value={currentPage}
                            active={currentPage == page}
                            onClick={(value) => go(+value)}
                        >
                            {currentPage}
                        </PaginationItem>
                    )}
                </div>
            <button 
                className={styles.btn_go}
                value='forward'
                onClick={(e) => go(e.target.value)}
            >
                Далее
            </button>
        </div>
    )
}
export default Pagination