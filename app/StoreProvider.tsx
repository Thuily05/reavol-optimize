'use-client'
//file này là client component, bởi vì chỉ có client component mới dùng được hooks, react-redux provider, context

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../context-local/store'

//store provider nhận 2 props 
//count: số ban đầu để khởi tạo counter slice, children: các component con được bọc bởi Provider
export default function StoreProvider({
    count,
    children
}: {
    count: number,
    children: React.ReactNode
}) {

    //giữ store chỉ được tạo 1 lần duy nhất trên client. storeRef.current=null
    const storeRef = useRef<AppStore | null>(null)

    if (!storeRef.current) { //lần đầu render storeRef.curent = null thì lúc này mới chạy

        storeRef.current = makeStore()
        //tạo storeRef.current = makeStore()
        //giá trị ref không bị reset khi component re-render -> sẽ không tạo lại makeStore
        //ngoài ra còn tránh mất state khi component re-render
    }
    return (
        //react-redux provider: truyền store xuống toàn bộ component con
        //mọi component con có thể dùng useDispatch(), useSelector()
        //storeProvider giống như 'router' cho Redux store
        <Provider store={storeRef.current}>{
            children
        }</Provider>
    )
}