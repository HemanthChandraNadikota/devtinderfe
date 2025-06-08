import { createSlice } from "@reduxjs/toolkit"

const feedSlice = createSlice({
    name: "feed",
    initialState: null,
    reducers: {
        addFeed: (state, action) => {
            return action.payload
        },
        removeFeed: (state, action) => {
            return state.filter((profile)=>profile._id !== action.payload)
        },
        removeAllFeed: (state, action) => {
            return null
        }
    }
})

export const { addFeed, removeFeed, removeAllFeed } = feedSlice.actions
export default feedSlice.reducer