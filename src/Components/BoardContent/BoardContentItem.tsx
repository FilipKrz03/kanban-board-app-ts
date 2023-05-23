import React from "react"
import { Subtask } from "../models/Subtask"
import classes from './BoardContentItem.module.scss';

const BoardContentItem:React.FC<{
    id : number , 
    key : number , 
    description : string , 
    title : string , 
    subtasks : Subtask[] , 
}> = (props) => {

    const subtaskLength = props.subtasks.length;

return(
    <div className={classes.item}>
        <h2>{props.title}</h2>
        <p>0 of {subtaskLength} subtasks</p>
    </div>
)
}

export default BoardContentItem