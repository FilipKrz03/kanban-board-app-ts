import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { boardsActions } from '../../store/boards-slice';
import { Checkbox } from '@mui/material';
import classes from './SubtaskDetail.module.scss';


const SubtaskDetail:React.FC<{itemId:number, id:string , text:string , isActive:boolean}> = (props) => {

    const dispatch = useDispatch();
    const [isActive , setIsActive] = useState(props.isActive);
    

    const checkboxChangeHandler = (event:any) => {
        setIsActive(prevValue => !prevValue);
        dispatch(boardsActions.changeSubtaskStatus({itemId : props.itemId , subtaskId : props.id}))
    }
    return(
        <div className={classes.detail}>
            {props.text}
            <Checkbox checked={!isActive} onChange={checkboxChangeHandler} />
        </div>
    )
}

export default SubtaskDetail;