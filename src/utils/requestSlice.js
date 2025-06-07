import { createSlice } from "@reduxjs/toolkit"

const requestSlice = createSlice({
    name: "request",
    initialState: null,
    reducers: {
        setRequests: (state, action) => {
            return action.payload
        }
    }
})

export const { setRequests } = requestSlice.actions
export default requestSlice.reducer