
import { fetchBlogData } from './actions'
import { createReducer } from '@reduxjs/toolkit'
import { BlogData } from '@/utils/interface'

interface blogState {
    loading: boolean,
    data: BlogData
}
export const homeInitialState: blogState = {
    loading: true,
    data: {
        data: {},
        message: 'initial'
    }
}
export const blogReducer = createReducer(homeInitialState, (builder) => {
    builder
        .addCase(fetchBlogData.pending, (state, action) => {
            state.loading = true
        })
        .addCase(fetchBlogData.rejected, (state, action) => {
            state.loading = false
        })
        .addCase(fetchBlogData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        })
})