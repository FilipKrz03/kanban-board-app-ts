import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Board } from "../models/Board";
import classes from "./BoardContent.module.scss";
import BoardContentItem from "./BoardContentItem";

const BoardContent = () => {
  const activeBoardId: number | undefined = useSelector(
    (state: RootState) => state.board.activeBoard
  );
  const boards: Board[] = useSelector((state: RootState) => state.board.boards);
  const isThirdList: boolean | undefined = boards.find(
    (board) => board.id === activeBoardId
  )?.thirdList;
  const activeBoard = boards.find((board) => board.id === activeBoardId);

  const todos = activeBoard?.todos.filter((todo) => todo.dueList === "todo");
  const doing = activeBoard?.todos.filter((todo) => todo.dueList === "doing");
  const done = activeBoard?.todos.filter((todo) => todo.dueList === "done");

  return (
    <div className={classes.list}>
      <div className={classes["list-item"]}>
        <p>Todo</p>
        {todos?.map((todo) => {
          return (
            <BoardContentItem
              id={todo.id}
              key={todo.id}
              dueList = {todo.dueList}
              description={todo.description}
              title={todo.title}
              subtasks={todo.subtasks}
            />
          );
        })}
      </div>
      {isThirdList && (
        <div className={classes["list-item"]}>
          <p>Doing</p>
          {doing?.map((todo) => {
            return (
              <BoardContentItem
                id={todo.id}
                key={todo.id}
                dueList = {todo.dueList}
                description={todo.description}
                title={todo.title}
                subtasks={todo.subtasks}
              />
            );
          })}
        </div>
      )}
      <div className={classes["list-item"]}>
        <p>Done</p>
        {done?.map((todo) => {
          return (
            <BoardContentItem
              id={todo.id}
              key={todo.id}
              dueList = {todo.dueList}
              description={todo.description}
              title={todo.title}
              subtasks={todo.subtasks}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BoardContent;
