import React from "react"
import styles from "./Pagination.module.css"

const PaginationItem = ({onClick, active, value, children}) => {
    const classes = [styles.pagination_item]
    if(active) classes.push(styles.active)

    return (
        <button 
            className={classes.join(' ')}
            value={value}
            onClick={(e) => onClick(e.target.value)}
        >
            {children}
        </button>
    )
}

export default PaginationItem