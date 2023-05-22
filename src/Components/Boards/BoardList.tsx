import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Board } from "../models/Board";
import classes from "./BoardList.module.scss";
import BoardItem from "./BoardItem";


const BoardList = () => {
  const boards: Board[] = useSelector((state: RootState) => state.board.boards);
  const numberOfBoards:number = boards.length;
  const [activeBoardId , setActiveBoardId] = useState<number | undefined>(numberOfBoards > 0 ? boards[0].id : undefined );

  const setActiveIdHandler = (id:number) => {
    setActiveBoardId(id);
  }

  return (
    <div className={classes.list}>
      <p>All Boards : ({numberOfBoards})</p>
      <ul>
        {boards.map((board) => {
          return (
              <BoardItem 
              setActiveId={setActiveIdHandler}
                activeId = {activeBoardId || undefined}
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
