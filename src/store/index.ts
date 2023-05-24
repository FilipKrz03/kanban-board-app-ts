import {configureStore} from '@reduxjs/toolkit';
import boardsSlice from './boards-slice';

const store = configureStore({
    reducer : {
        board : boardsSlice.reducer , 
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
