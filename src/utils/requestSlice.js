import { createSlice } from "@reduxjs/toolkit"

const requestSlice = createSlice({
    name: "request",
    initialState: null,
    reducers: {
        setRequests: (state, action) => {
            return action.payload
        },
        removeRequest: (state,action) => {
            state = state.filter((request)=>request._id !== action.payload)
            return state
        }
    }
})

export const { setRequests, removeRequest } = requestSlice.actions
export default requestSlice.reducer