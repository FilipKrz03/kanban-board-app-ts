import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { Board } from "../Components/models/Board";


interface boardState {
    boards:Board[] , 
    activeBoard : number | undefined ,
}

const initialState  = {boards:[] ,  activeBoard : undefined} as boardState;

const boardsSlice = createSlice({
    name: 'boards' , 
    initialState , 
    reducers : {
        addBoard(state , action:PayloadAction<Board>){
            state.boards.push(action.payload);
        } , 
        addItemToBoard(state , action){} , 
        removeItemFromBoard(state , action) {} , 
        removeBoard(state , action:PayloadAction<number>){
           state.boards = state.boards.filter(board => board.id !== action.payload);
        } , 
        changeActiveBoard(state , action:PayloadAction<number>){
            state.activeBoard = action.payload;
        }
    }

})

export const boardsActions = boardsSlice.actions;
export default boardsSlice;