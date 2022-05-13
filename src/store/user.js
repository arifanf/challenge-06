import { createSlice } from '@reduxjs/toolkit'

let initialState = null

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: initialState
    },
    reducers: {
        addUser: (state, action) => {
            state.data = {...action.payload.userData}            
        },
        removeUser: (state) => {
            state.data = null
        }
    }
})

export default userSlice