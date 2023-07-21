import React from "react"
import TableItem from "../TableItem/TableItem"
import TableHeader from "../TableHeader/TableHeader"
import styles from "./Table.module.css"

const Table = () => {

    const arr = [1,2,3,4,4,5]

    return (
        <table className={styles.table}>
            <TableHeader/>
            <tbody className={styles.table_body}>
                {
                    arr.map(() => 
                        <TableItem/>
                    )
                }
            </tbody>
        </table>
        )
}

export default Table