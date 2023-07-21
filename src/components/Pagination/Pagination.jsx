import React from "react"
import styles from "./pagination.module.css"

const Pagination = () => {

    return (
        <div className={styles.pagination}>
            <button className={styles.btn_go}>Назад</button>
                <div className={styles.pagination_items}>
                    <button className={styles.pagination_item}>1</button>
                    <button className={styles.pagination_item}>2</button>
                    <button className={styles.pagination_item}>3</button>
                    <button className={styles.pagination_item}>4</button>
                </div>
            <button className={styles.btn_go}>Далее</button>
        </div>
    )
}
export default Pagination