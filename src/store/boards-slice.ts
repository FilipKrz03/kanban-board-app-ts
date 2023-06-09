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
        changeSubtaskStatus(state , action:PayloadAction<{itemId:number ,subtaskId:string}>){
            const activeBoard = state.boards.find(board => board.id === state.activeBoard);
            const noteItem = activeBoard?.todos.find(item => item.id === action.payload.itemId);
            const subtask = noteItem?.subtasks.find(subtask => subtask.id === action.payload.subtaskId);
            subtask!.active = !subtask!.active;
        } , 
        changeNoteStatus(state , action:PayloadAction<{itemId:number , newStatus:string}>){
            const activeBoard = state.boards.find(board => board.id === state.activeBoard);
            const noteItem = activeBoard!.todos.find(item => item.id === action.payload.itemId);
            noteItem!.dueList = action.payload.newStatus;

        } ,
        removeItemFromBoard(state , action:PayloadAction<number>) {
            const activeBoard = state.boards.find(board => board.id === state.activeBoard);
           activeBoard!.todos =  activeBoard!.todos.filter(todo => todo.id !== action.payload);

        } , 
        removeBoard(state , action:PayloadAction<number>){
           state.boards = state.boards.filter(board => board.id !== action.payload);
        } , 
        changeActiveBoard(state , action:PayloadAction<number>){
            state.activeBoard = action.payload;
        } , 
        replaceData(state , action:PayloadAction<{boards:Board[] , activeBoard:number}>){
            state.boards = action.payload.boards || [];
            if(action.payload.activeBoard === 0){
                state.activeBoard = undefined;
            }else{
                state.activeBoard = action.payload.activeBoard;
            }
        } , 
    }
})

export const boardsActions = boardsSlice.actions;
export default boardsSlice;