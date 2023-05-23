import { useState } from "react";
import Cart from "../UI/Cart";
import Subtask from "./Subtask";
import { Subtask as subtaskModel } from "../models/Subtask";
import { Select, MenuItem } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import classes from "./NewTask.module.scss";


const NewTask:React.FC<{onClose:()=>void}> = (props) => {

  const [selectValue, setSelectValue] = useState<string>("todo");
  const [subtaks , setSubtask] = useState<subtaskModel[]>([]);

  const slectChangeHandler = (event: any) => {
    setSelectValue(event.target.value);
  };

  const addSubtaskHandler = () => {
    const newSubtasksArray = [...subtaks];
    newSubtasksArray.push({id:Math.random().toString() , value:''});
    setSubtask(newSubtasksArray);
  }

  const subtaskChangeHandler = (value:string , id:string) => {
   const changedArray = subtaks.map(item => {
    if(item.id === id){
        item.value = value;
        return item;
    }else {
        return item;
    }
   });
  setSubtask(changedArray);
  console.log(subtaks);
   }

   const delateSubtaskHandler = (id:string) => {
    const newSubtasks = subtaks.filter(subtask => subtask.id !== id);
    setSubtask(newSubtasks);
   }

   const closeModalHandler = () => {
    props.onClose();
   }
  

  return (
    <Cart>
      <form className={classes.form}>
        <CloseIcon className={classes.close} fontSize="large" onClick = {closeModalHandler} />
        <h2>Add New Task</h2>
        <div className={classes["form-element"]}>
          <label htmlFor="taskName">Task Name</label>
          <input type="text" id="taskName" />
        </div>
        <div className={classes["form-element"]}>
          <label htmlFor="description">Description</label>
          <textarea name="text" id="decription" cols={30} rows={7} />
        </div>
        <div className={`${classes['form-element']} ${classes.subtasks} `}>
        <label htmlFor="subtasks">Subtasks</label>
        {subtaks.map(subtaks => {
            return(
                <Subtask
                id = {subtaks.id}
                key={subtaks.id}
                onInputChange={subtaskChangeHandler}
                onDelate={delateSubtaskHandler}
                />
            )
        })}
        <button type="button" onClick={addSubtaskHandler}>+Add Subtask</button>

        </div>
        <div className={classes["form-element"]}>
          <label htmlFor="select">Status</label>
          <Select onChange={slectChangeHandler} value={selectValue} className={classes.select}>
            <MenuItem value={"todo"}>Todo</MenuItem>
            <MenuItem value={"doing"}>Doing</MenuItem>
            <MenuItem value={"done"}>Done</MenuItem>
          </Select>
        </div>
        <button>Create Task</button>
      </form>
    </Cart>
  );
};

export default NewTask;
