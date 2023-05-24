import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import Cart from "../UI/Cart";
import useInput from "../../hooks/useInput";
import InvalidInput from "../UI/InvalidInput";
import { boardsActions } from "../../store/boards-slice";
import { Checkbox, FormControlLabel } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Board } from "../models/Board";
import classes from "./NewBoard.module.scss";

const NewBoard:React.FC<{onClose:() => void}> = (props) => {

  const [isColumnActive, setIsColumnActive] = useState<boolean>(true);

  const dispatch = useDispatch();

  const {
    inputValue : boardTitleValue , 
    hasError : hasboardTitleError , 
    blurHandler : boardTitleBlurHandler , 
    changeHandler : boardTitleChangeHandler , 
    reset : boardTitleResetHandler , 
  } = useInput((value) => value.length > 0);


  const changeCheckboxHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setIsColumnActive(prevValue => !prevValue);
  }

  const submitFormHandler = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newBoard:Board = {
      id : Math.random() , 
      title : boardTitleValue ,
      thirdList : isColumnActive ,
      todos : [] , 
    }
   dispatch(boardsActions.addBoard(newBoard));
   boardTitleResetHandler();
   setIsColumnActive(true);
   props.onClose();
  }

  return (
    <Cart>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <CloseIcon className={classes.close} fontSize="large" onClick = {()=>{props.onClose()}}/>
        <h2>Add new board : </h2>
        <div className={`${classes['form-element']} ${hasboardTitleError && classes.invalid}`}>
        <label htmlFor="board">Board name:</label>
        <input type="text" id="board"
         onChange={boardTitleChangeHandler} onBlur={boardTitleBlurHandler} value={boardTitleValue} />
         {hasboardTitleError && <InvalidInput />}
        </div>
        <FormControlLabel
        value={isColumnActive}
          control={<Checkbox size="medium" color="success" defaultChecked onChange={changeCheckboxHandler} />}
          label="Join doing column ? "
        />
        <button>Add Board</button>
      </form>
    </Cart>
  );
};

export default NewBoard;
