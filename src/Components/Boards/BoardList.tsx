import {useEffect} from 'react';
import { useSelector , useDispatch } from "react-redux";
import { boardsActions } from '../../store/boards-slice';
import { RootState } from "../../store";
import { Board } from "../models/Board";
import classes from "./BoardList.module.scss";
import BoardItem from "./BoardItem";


const BoardList = () => {

  const boards: Board[] = useSelector((state: RootState) => state.board.boards);
  const dispatch = useDispatch();
  const numberOfBoards:number = boards.length;

  useEffect(()=>{
    dispatch(boardsActions.changeActiveBoard(boards[numberOfBoards - 1].id))
  }, [boards , dispatch , numberOfBoards])
  


  return (
    <div className={classes.list}>
      <p>All Boards : ({numberOfBoards})</p>
      <ul>
        {boards.map((board) => {
          return (
              <BoardItem 
                id={board.id}
                key={board.id}
                title={board.title}
              />
          );
        })}
      </ul>
    </div>
  );
};

export default BoardList;
