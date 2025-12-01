import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ButtonState {
    [id: number]: boolean
}

const initialState: ButtonState = {}

export const buttonSlice = createSlice({
    name: 'button',
    initialState,
    reducers: {
        click: (state, action: PayloadAction<number>) => {
            const selectedId = action.payload
            // Reset tất cả về false
            Object.keys(state).forEach(key => {
                state[Number(key)] = false
            })
            // Chỉ icon được click thành true
            state[selectedId] = true
        },
    },
})

export const { click } = buttonSlice.actions
export default buttonSlice.reducer
