import { Board } from "../Components/models/Board";
import { boardsActions } from "./boards-slice";

export const saveBoardData = (
  boards: Board[],
  activeBoard: number | undefined
) => {
  return () => {
    localStorage.setItem("boards", JSON.stringify(boards));
    if (activeBoard === undefined) {
      localStorage.setItem("activeBoard", JSON.stringify(0));
    } else {
      localStorage.setItem("activeBoard", JSON.stringify(activeBoard));
    }
  };
};

export const getBoardData = () => {
  return (dispatch: any) => {
    const boards = JSON.parse(localStorage.getItem("boards") || '[]') ;
    const activeBoard = JSON.parse(localStorage.getItem("activeBoard") || "0") ;
    dispatch(boardsActions.replaceData({ boards, activeBoard }));
  };
};
