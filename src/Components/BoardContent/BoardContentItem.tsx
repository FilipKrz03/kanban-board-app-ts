import React , {useState} from "react"
import { Subtask } from "../models/Subtask"
import Modal from "../UI/Modal";
import { Select , MenuItem } from "@mui/material";
import classes from './BoardContentItem.module.scss';
import useActiveBoard from "../../hooks/useActiveBoard";

const BoardContentItem:React.FC<{
    id : number , 
    key : number , 
    dueList:string
    description : string , 
    title : string , 
    subtasks : Subtask[] , 
}> = (props) => {

    const [isModalActive , setIsModalActive] = useState<boolean>(false)

    const subtaskLength = props.subtasks.length;
    const activeBoard = useActiveBoard();
   

    const showModalHandler = (event:React.MouseEvent<HTMLDivElement>) => {
        setIsModalActive(true);

    }

return(
    <>
    <div className={classes.item} onClick={showModalHandler}>
        <h2>{props.title}</h2>
        <p>0 of {subtaskLength} subtasks</p>
    </div>
    </>
)
}

export default BoardContentItem