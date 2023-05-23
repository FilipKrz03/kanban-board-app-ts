import classes from './BoardContentDetail.module.scss';
import Cart from "../UI/Cart";
import { Select , MenuItem } from '@mui/material';
import { Subtask } from '../models/Subtask';
import useActiveBoard from '../../hooks/useActiveBoard';

const BoardContentDetail:React.FC<{
    id : number , 
    key : number , 
    dueList : string , 
    description : string , 
    title : string , 
    subtasks : Subtask[] , 
}> = (props) => {

    const activeBoard = useActiveBoard();

    return(
        <Cart>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <Select>
            <MenuItem>Todo</MenuItem>
           { activeBoard?.thirdList &&  <MenuItem>Doing</MenuItem>}
            <MenuItem>Done</MenuItem>
        </Select>

        </Cart>
    )
    
}






export default BoardContentDetail;