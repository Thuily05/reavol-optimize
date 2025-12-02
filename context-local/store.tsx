import { configureStore } from '@reduxjs/toolkit'
import buttonReducer from './slices/buttonSlice'
import bookReducer from './slices/bookSlice'
import { homeReducer } from './home'
import { blogReducer } from './blog'
import { api } from './rtkData'

export const makeStore = () => {
    //makestore là 1 function trả về redux store mới. 
    //trong app router, mỗi request phải có store riêng, không được tại global sotre như configureStore
    return configureStore(
        {
            reducer: {
                home: homeReducer,
                blog: blogReducer,
                button: buttonReducer,
                book: bookReducer,
                [api.reducerPath]: api.reducer,
            },
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(api.middleware)
        }
    )
}
//lấy kiểu của store mà makestore trả về, appstore chính là kiểu configureStore return type
export type AppStore = ReturnType<typeof makeStore>

//AppStore['getState'] lấy kiểu của thuộc tính getState trong store, getState là một function trả về state global của Redux
//ReturnType<AppStore['getState'] lấy kiểu của toàn bộ state
export type RootState = ReturnType<AppStore['getState']>
//ví dụ sau này khi thêm reducer: {counter: counterReducer, user: userReducer}
//RootState sẽ tự động thành type RootState = {counter: CounterState, user: UserState}

//lấy kiểu của hàm dispatch
export type AppDispatch = AppStore['dispatch']
