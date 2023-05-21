import { Todo } from "./Todo"

export type Board = {
    id : number , 
    title : string , 
    thirdList : boolean , 
    todos:Todo[] , 
}

