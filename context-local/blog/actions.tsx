import { API } from '@/context-local/api'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchBlogData = createAsyncThunk('blog/fetchData', async () => {
    const respone = await fetch(API.blogData)
    return (await respone.json()) //trả về object {data: {}, message: 'success'}
})