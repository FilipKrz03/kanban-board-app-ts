import {useState} from 'react';
import classes from './Subtask.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';

const Subtask:React.FC<
{id:string , onInputChange : (value:string , id:string) => void , onDelate:(id:string)=>void}
> = (props) => {

    const[inputValue , setInputValue] = useState<string>('');
    

    const inputChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
        props.onInputChange(event.target.value , props.id);
    }

    const delateSubtask = () => {
        props.onDelate(props.id);
    }

    return(
       <div className={classes.subtask}>
        <input type="text" id={props.id} key={props.id} value={inputValue} onChange={inputChangeHandler} />
        <DeleteIcon className={classes.icon} onClick = {delateSubtask} />
        </div>
    )

}

export default Subtask;