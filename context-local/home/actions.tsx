/*createAction: helper function giúp defining một Redux action type and creator. function createAction(type, prepareAction)
Cách thông thường để define một action trong Redux là khai báo riêng biệt const action type và function action creator để xây dụng 
(constructing) action of that types.
-> createAction giúp combines 2 khai báo này vào làm 1. createAction lấy action type và return an action creator for that type.
Action creater có thể gọi mà không gần tham số hoặc với một (payload được đính kèm vào action) 
Thông thường, trình tạo action creator chấp nhận một tham số duy nhất, which becomes action.payload. Điều này yêu cầu người gọi
phải xây dựng payload 1 cách chính xác và pass it in
Trong nhiều TH, bạn có thể thêm một vài logic để tạo ra giá trị payload, ví dụ như chấp nhận đa tham số cho action creator.
ví dụ như generating randomID, or getting current timestamp. Để làm được điều này, createAction chấp nhận một tham só thứ 2
là prepare callback - hàm sẽ được sử dụng để construct payload value
Ex:
import { createAction } from '@reduxjs/toolkit'
const increment = createAction('counter/increment')
let action = increment()
// { type: 'counter/increment' }
action = increment(3)
// returns { type: 'counter/increment', payload: 3 }
console.log(`The action type is: ${increment.type}`)
// 'The action type is: counter/increment'
*/

/*Sử dụng với createReducer() 
Action creators có thể được truyền trực tiếp vào addCase ở trong hàm callback createReducer() build
import {createAction, createReducer} from '@reduxjs/toolkit'
const increment = createAction('counter/increment')
const decrement = createAction('book/increment')
const initialState = 0
const counterReducer = createReducer(initialState, (builder) =>{
builder.addCase(increment, (state, action)=> state += action.payload)
builder.addCase(increment, (state, action)=> state -= action.payload)
})*/
import { API } from '@/context-local/api'
import { createAsyncThunk } from '@reduxjs/toolkit'

//page=0 unlock=false
export const fetchHomeData = createAsyncThunk('home/fetchData', async (req: Record<string, any>) => {
    const { page, unlock } = req
    const respone = await fetch(`${API.homeData}?page=${page}&unlock=${unlock}`)
    return (await respone.json()) //trả về object {data: Array(11), message: 'success'}
})