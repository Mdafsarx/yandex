import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from './sectionSlice';
import searchReducer from './searchSlice';


const store = configureStore({
    reducer: {
        section: sectionReducer,
        search: searchReducer
    }
});


export default store;