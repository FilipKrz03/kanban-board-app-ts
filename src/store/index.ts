import {configureStore} from '@reduxjs/toolkit';
import boardsSlice from './boards-slice';

const store = configureStore({
    reducer : {
        board : boardsSlice.reducer , 
    }
})

export default store;
