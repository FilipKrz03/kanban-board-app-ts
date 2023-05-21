import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import Cart from "../UI/Cart";
import { boardsActions } from "../../store/boards-slice";
import { Checkbox, FormControlLabel } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Board } from "../models/Board";
import classes from "./NewBoard.module.scss";

const NewBoard:React.FC<{onClose:() => void}> = (props) => {

  const [isColumnActive, setIsColumnActive] = useState<boolean>(false);
  const [boardTitle , setBoardTitle] = useState<string>('');
  const dispatch = useDispatch();

  const changeCheckboxHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setIsColumnActive(event.target.checked);
  }

  const titleChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setBoardTitle(event.target.value);
  }

  const submitFormHandler = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newBoard:Board = {
      id : Math.random() , 
      title : boardTitle ,
      thirdList : isColumnActive ,
      todos : [] , 
    }
   dispatch(boardsActions.addBoard(newBoard));
   setBoardTitle('');
   setIsColumnActive(true);
   props.onClose();
  }

  return (
    <Cart>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <CloseIcon className={classes.close} fontSize="large" onClick = {()=>{props.onClose()}}/>
        <h2>Add new board : </h2>
        <div className={classes['form-element']}>
        <label htmlFor="board">Board name:</label>
        <input type="text" id="board" onChange={titleChangeHandler} />
        </div>
        <FormControlLabel
          control={<Checkbox size="medium" color="success" defaultChecked onChange={changeCheckboxHandler} />}
          label="Join doing column ? "
        />
        <button>Add Board</button>
      </form>
    </Cart>
  );
};

export default NewBoard;
