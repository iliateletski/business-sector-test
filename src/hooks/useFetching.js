import { useState } from "react"

export const useFetching = (collback) => {
    const[isLoading, setIsLosding] = useState(true)
    const[error, setError] = useState('')

    const fetching = async () => {
        try {
            await collback()
        } catch(e) {
            setError(e.message)
        } finally {
            setIsLosding(false)
        }
    }

    return [fetching, isLoading, error]
}