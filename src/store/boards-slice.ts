import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { Board } from "../Components/models/Board";
import { Todo } from "../Components/models/Todo";


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
        addItemToBoard(state , action:PayloadAction<Todo>){
            const activeBoard = state.boards.find(board => board.id === state.activeBoard);
            activeBoard!.todos.push(action.payload);

        } , 
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