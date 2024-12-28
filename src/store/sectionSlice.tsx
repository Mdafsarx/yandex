import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    section: 'what-new'
}

const sectionSlice = createSlice({
    name: 'section',
    initialState,
    reducers: {
        setSection: (state, action) => {
            state.section = action.payload;
        },
    },
});


export const { setSection } = sectionSlice.actions
export default sectionSlice.reducer