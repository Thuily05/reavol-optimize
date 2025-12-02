import { createSlice, PayloadAction } from '@reduxjs/toolkit'
//createSlice-> tạo slice Redux nhanh, tự sinh reducer + action
//PayloadAction -> kiểu dữ liệu cho action.payload
//createSlice là gộp của reducers và actions

interface ButtonState {//state ban đầu là 1 object chứa các key dạng số (mỗi key nhận giá trị là true hoặc false)
    //mỗi key sẽ tượng trưng cho 1 button, lưu trạng thái nó có được chọn hay không
    [id: number]: boolean
}

const initialState: ButtonState = {}
//ban đầu initialState là 1 object rỗng, nhưng tương lai object sẽ chứa các key dạng số -> boolean

export const buttonSlice = createSlice({
    name: 'button', //xác định tiền tố cho action type (vd: 'button/click')
    initialState, //khai báo state ban đầu
    reducers: { //các hàm xử lý actions (giống switch-case ngày xưa)
        //reducers chỉ dùng để định nghĩa synchronous reducers (hàm nhận state, action và thay đổi state trực tiếp)
        click: (state, action: PayloadAction<number>) => {
            //tên action: click, nhận vào 1 number (chính là id của button được click)
            const selectedId = action.payload //lấy id của nút người dùng vừa click
            // Reset tất cả về false
            Object.keys(state).forEach(key => {
                //Object.keys(state) trả về array TÊN KEY của object state
                // giá trị trả về đều là string (kể cả khi có dùng số để đặt key)
                state[Number(key)] = false
                //reset giá trị mỗi trường của state về false
            })
            // Chỉ icon được click thành giá trị của trường idIcon trong state mới là true
            //state ban đầu là 1 object rỗng
            //khi có icon nào được click thì nó sẽ nạp vào state trường idIcon của icon đó
            state[selectedId] = true
        },
        /*extraReducers?: dùng kết hợp với redux thunk - xử lý trạng thái api
        nghe các action không phải từ createSlice tạo ra
        tham chiếu cho slice reducer's location, được sử dụng bởi combineSLices và slice.selectors*/
        /*reducerPath?: string - 1 đối tượng chứa các selectors có slice's state là tham số đầu tiên của chúng*/
        /*selectors?: Record<string, (sliceState: State, ...args: any[]) => any> */


    },
})

export const { click } = buttonSlice.actions
export default buttonSlice.reducer
