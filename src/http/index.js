import axios from 'axios'

const host = axios.create({
    baseURL: process.env.REACT_APP_HOST_URL
})

export const fetchPosts = async (page = 1, limit = 10) => {
    const response = await host.get('./posts', {
        params: {
            _limit: limit,
            _page: page
        }
    })

    return response
} 