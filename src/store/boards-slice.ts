import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { Board } from "../Components/models/Board";


interface boardState {
    boards:Board[]
}

const initialState = {boards:[]} as boardState;

const boardsSlice = createSlice({
    name: 'boards' , 
    initialState , 
    reducers : {
        addBoard(state , action:PayloadAction<Board>){
            state.boards.push(action.payload);
        } , 
        addItemToBoard(state , action){} , 
        removeItemFromBoard(state , action) {} , 
        removeBoard(state , action){} , 
    }

})

export const boardsActions = boardsSlice.actions;
export default boardsSlice;