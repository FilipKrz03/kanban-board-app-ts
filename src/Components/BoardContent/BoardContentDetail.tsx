import { useState } from "react";
import classes from "./BoardContentDetail.module.scss";
import { useDispatch } from "react-redux";
import { boardsActions } from "../../store/boards-slice";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Cart from "../UI/Cart";
import { Select, MenuItem } from "@mui/material";
import { Subtask } from "../models/Subtask";
import useActiveBoard from "../../hooks/useActiveBoard";
import SubtaskDetail from "./SubtaksDetail";

const BoardContentDetail: React.FC<{
  id: number;
  key: number;
  dueList: string;
  description: string;
  title: string;
  subtasks: Subtask[];
}> = (props) => {

  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = useState(props.dueList);
  const activeBoard = useActiveBoard();

  const subtaskLength = props.subtasks.length;

  let doneSubtasks: number = 0;
  props.subtasks.forEach((subtask) => {
    if (subtask.active !== true) {
      doneSubtasks++;
    }
  });

  const selectChangeHandler = (event: any) => {
    setSelectValue(event.target.value);
    dispatch(boardsActions.changeNoteStatus({itemId:props.id , newStatus:event.target.value}));
  };

  const delateNoteHandler = () => {
    dispatch(boardsActions.removeItemFromBoard(props.id));
    console.log(props.id);
  }

  return (
    <Cart>
      <div className={classes.container}>
        <DeleteForeverIcon className={classes.delate} fontSize="large" onClick={delateNoteHandler} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className={classes.subtasks}>
          <p>
            Subtasks ( {doneSubtasks} of {subtaskLength} )
            {props.subtasks.map(subtask => {
                return(
                    <SubtaskDetail
                    itemId = {props.id}
                    id = {subtask.id}
                    key={subtask.id}
                    text={subtask.value}
                    isActive={subtask.active}
                    />
                )
            })}
          </p>
        </div>
        <div className={classes.select}>
          <label htmlFor="select">Current Status</label>
          <Select value={selectValue} onChange={selectChangeHandler}>
            <MenuItem value="todo">Todo</MenuItem>
            {activeBoard?.thirdList && <MenuItem value="doing">Doing</MenuItem>}
            <MenuItem value="done">Done</MenuItem>
          </Select>
        </div>
      </div>
    </Cart>
  );
};

export default BoardContentDetail;
