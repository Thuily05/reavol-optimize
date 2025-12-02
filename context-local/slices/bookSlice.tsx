//thunk- bắt redux phải chờ để làm gì đó, dùng trong callback, hàm sử dụng như sau
//reducers chỉ dùng để định nghĩa synchronous reducers (các hàm nhận state, action và thay đổi state trực tiếp)
//createAsyncThunk là hàm tạo action bất đồng bộ (asynchronous action), không phải reducer
//createAsyncThunk phải tách riêng ngoài slice, rồi xử lý kết quả trong
//muốn đưa createAsyncThunk vào trong reducers thì phải sử dụng wrapper hoặc lib tùy chỉnh, ví dụ như @reduxjs/toolkit-query
'use client'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BookData, BlogData } from '@/utils/interface'

interface BookState {
    loadingHomeData: boolean,
    loadingBlogData: boolean,
    homeData: BookData,
    blogData: BlogData
}

const initialState: BookState = {
    loadingHomeData: true,
    loadingBlogData: true,
    homeData: { data: [], message: 'initial' },  // chỉ cần mảng rỗng thôi
    blogData: { data: {}, message: 'initial' },
}
export const fetchHomeData = createAsyncThunk('book/fetchHomeData', async () => {
    const res = await fetch('https://api.reavol.vn/api/v1/home/get-home-data?page=0&unLock=false')
    return (await res.json())
})
export const fetchBlogData = createAsyncThunk('book/fetchBlogData', async () => {
    const res = await fetch('https://api.reavol.vn/api/v1/blog/get-blog-for-web')
    return (await res.json())
})
export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            //homedata
            .addCase(fetchHomeData.pending, (state) => {
                console.log('pending')
                state.loadingHomeData = true
            })
            .addCase(fetchHomeData.fulfilled, (state, action) => {
                console.log('fulfilled')
                state.loadingHomeData = false;
                state.homeData = action.payload
            })
            .addCase(fetchHomeData.rejected, (state) => {
                console.log('rejected')
                state.loadingHomeData = false;
            })
            //blogdata
            .addCase(fetchBlogData.pending, (state) => {
                state.loadingBlogData = true
            })
            .addCase(fetchBlogData.fulfilled, (state, action) => {
                state.loadingBlogData = false;
                state.blogData = action.payload
            })
            .addCase(fetchBlogData.rejected, (state) => {
                state.loadingBlogData = false;
            })
    }

})
export default bookSlice.reducer