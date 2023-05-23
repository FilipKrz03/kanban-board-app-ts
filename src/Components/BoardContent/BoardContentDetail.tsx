import { useState } from "react";
import classes from "./BoardContentDetail.module.scss";
import Cart from "../UI/Cart";
import { Select, MenuItem } from "@mui/material";
import { Subtask } from "../models/Subtask";
import useActiveBoard from "../../hooks/useActiveBoard";

const BoardContentDetail: React.FC<{
  id: number;
  key: number;
  dueList: string;
  description: string;
  title: string;
  subtasks: Subtask[];
}> = (props) => {
  const [selectValue, setSelectValue] = useState(props.dueList);
  const activeBoard = useActiveBoard();

  const selectChangeHandler = (event: any) => {
    setSelectValue(event.target.value);
  };

  return (
    <Cart>
      <div className={classes.container}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
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
