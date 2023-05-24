import { useState } from "react";
import {useDispatch } from "react-redux";
import useActiveBoard from "../../hooks/useActiveBoard";
import { boardsActions } from "../../store/boards-slice";
import Cart from "../UI/Cart";
import InvalidInput from "../UI/InvalidInput";
import useInput from "../../hooks/useInput";
import Subtask from "./Subtask";
import { Subtask as subtaskModel } from "../models/Subtask";
import { Select, MenuItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./NewTask.module.scss";

const NewTask: React.FC<{ onClose: () => void }> = (props) => {

  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = useState<string>("todo");
  const [subtaks, setSubtask] = useState<subtaskModel[]>([]);
  const [decriptionValue, setDecriptionValue] = useState<string>("");
  const isThirdList = useActiveBoard()?.thirdList;

  const {
    inputValue : taskNameValue , 
    hasError : hasTaskNameError , 
    blurHandler : taskNameBlurHandler , 
    changeHandler : taskNameChangeHandler , 
    reset : taskResetHandler , 
  } = useInput((value) => value.length > 0);

  const {
    inputValue : descriptionValue , 
    hasError : hasDescriptionError , 
    blurHandler : descriptionBlurHandler , 
    changeHandler : descriptionChangeHandler , 
    reset : descriptionHandler , 
  } = useInput((value) => value.length > 0);


 
  const slectChangeHandler = (event: any) => {
    setSelectValue(event.target.value);
  };


  const subtaskChangeHandler = (value: string, id: string) => {
    const changedArray = subtaks.map((item) => {
      if (item.id === id) {
        item.value = value;
        return item;
      } else {
        return item;
      }
    });
    setSubtask(changedArray);
  };

  const addSubtaskHandler = () => {
    const newSubtasksArray = [...subtaks];
    newSubtasksArray.push({ id: Math.random().toString(), value: "" , active : true });
    setSubtask(newSubtasksArray);
  };

  const delateSubtaskHandler = (id: string) => {
    const newSubtasks = subtaks.filter((subtask) => subtask.id !== id);
    setSubtask(newSubtasks);
  };

  const closeModalHandler = () => {
    props.onClose();
  };

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      boardsActions.addItemToBoard({
        id: Math.random(),
        title: taskNameValue,
        description: decriptionValue,
        subtasks: subtaks,
        dueList: selectValue,
      })
    );
    props.onClose();
  };


  

  return (
    <Cart>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <CloseIcon
          className={classes.close}
          fontSize="large"
          onClick={closeModalHandler}
        />
        <h2>Add New Task</h2>
        <div className={`${classes['form-element']} ${hasTaskNameError && classes.invalid}`}>
          <label htmlFor="taskName">Task Name</label>
          <input
            type="text"
            id="taskName"
            value={taskNameValue}
            onChange={taskNameChangeHandler}
            onBlur={taskNameBlurHandler}
          />
          {hasTaskNameError && <InvalidInput />}
        </div>
        <div className={`${classes['form-element']} ${hasDescriptionError && classes.invalid}`}>
          <label htmlFor="description">Description</label>
          <textarea
            name="text"
            id="decription"
            cols={30}
            rows={7}
            value={descriptionValue}
            onChange={descriptionChangeHandler}
            onBlur={descriptionBlurHandler}
          />
          {hasDescriptionError && <InvalidInput />}
        </div>
        <div className={`${classes["form-element"]} ${classes.subtasks} `}>
          <label htmlFor="subtasks">Subtasks</label>
          {subtaks.map((subtaks) => {
            return (
              <Subtask
                id={subtaks.id}
                key={subtaks.id}
                onInputChange={subtaskChangeHandler}
                onDelate={delateSubtaskHandler}
              />
            );
          })}
          <button type="button" onClick={addSubtaskHandler}>
            +Add Subtask
          </button>
        </div>
        <div className={classes["form-element"]}>
          <label htmlFor="select">Status</label>
          <Select
            onChange={slectChangeHandler}
            value={selectValue}
            className={classes.select}
          >
            <MenuItem value={"todo"}>Todo</MenuItem>
            {isThirdList && <MenuItem value={"doing"}>Doing</MenuItem>}
            <MenuItem value={"done"}>Done</MenuItem>
          </Select>
        </div>
        <button>Create Task</button>
      </form>
    </Cart>
  );
};

export default NewTask;
