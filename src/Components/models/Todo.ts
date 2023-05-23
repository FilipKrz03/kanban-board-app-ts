import { Subtask } from "./Subtask"

export type Todo = {
    id: number ,
    title : string , 
    description:string , 
    subtasks: Subtask[] , 
    dueList : string , 
}