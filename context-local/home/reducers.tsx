/*redux reducers thường sử dụng switch/case để xử lý mỗi action type - approach works well nhưng có nhiều boilerplate code và dễ mắc lỗi
createReducer giúp đơn giản hóa (streamlines) the implementation (triển khai) 
createReducer sử dụng ký hiệu builder callback để định nghĩa các hoạt động cụ thể, nối với a range of actions hoặc xử lý a default case.
Sử dụng với createAction, createAsyncThunk*/
import { fetchHomeData } from './actions'
import { createReducer } from '@reduxjs/toolkit'
import { BookData } from '@/utils/interface'

interface homeState {
    loading: boolean,
    data: BookData
}
export const homeInitialState: homeState = {
    loading: true,
    data: {
        data: [],
        message: 'initial'
    }
}
export const homeReducer = createReducer(homeInitialState, (builder) => {
    builder
        .addCase(fetchHomeData.pending, (state, action) => {
            state.loading = true
        })
        .addCase(fetchHomeData.rejected, (state, action) => {
            state.loading = false
        })
        .addCase(fetchHomeData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
        })
})