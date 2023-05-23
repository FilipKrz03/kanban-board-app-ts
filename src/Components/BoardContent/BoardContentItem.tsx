import React, { useState } from "react";
import { Subtask } from "../models/Subtask";
import Modal from "../UI/Modal";
import classes from "./BoardContentItem.module.scss";
import BoardContentDetail from "./BoardContentDetail";

const BoardContentItem: React.FC<{
  id: number;
  key: number;
  dueList: string;
  description: string;
  title: string;
  subtasks: Subtask[];
}> = (props) => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const subtaskLength = props.subtasks.length;

  const showModalHandler = () => {
    setIsModalActive(true);
  };

  const closeModalHandler = () => {
    setIsModalActive(false);
  };

  return (
    <>
      <div className={classes.item} onClick={showModalHandler}>
        <h2>{props.title}</h2>
        <p>0 of {subtaskLength} subtasks</p>
      </div>
      {isModalActive && (
        <Modal onClose={closeModalHandler}>
          <BoardContentDetail
            id={props.id}
            key={props.id}
            description={props.description}
            dueList={props.dueList}
            title={props.title}
            subtasks={props.subtasks}
          />
        </Modal>
      )}
    </>
  );
};

export default BoardContentItem;
