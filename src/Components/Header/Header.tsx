import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import NewTask from '../NewTask/NewTask';
import NewBoard from '../NewBoard/NewBoard';
import classes from './Header.module.scss';
import Modal from '../UI/Modal';


const Header = () => {

    const [isFormActive , setIsFormActive] = useState<boolean>(false);
    const [isNewTaskFormActive , setIsNewTaskFormActive] = useState<boolean>(false);
    const boardsNumber:number = useSelector((state : RootState) => state.board.boards.length);

    const closeModalHandler = () => {
        setIsFormActive(false);
    }

    const openModalHandler = () => {
        setIsFormActive(true);
    }

    const openTaskModalHandler = () => {
        setIsNewTaskFormActive(true);
    }

    const closeTaskModalHandler = () => {
        setIsNewTaskFormActive(false);
    }

    return(
        <header className={classes.header}>
            <span>Kanban</span>
            {boardsNumber > 0 && <button className={classes.adder} onClick={openTaskModalHandler}>+Add new Task</button>}
            <button className={classes.adder} onClick={openModalHandler}>+Add new board</button>
            {isFormActive && <Modal onClose={closeModalHandler}><NewBoard onClose={closeModalHandler}/></Modal>}
           { isNewTaskFormActive &&  <Modal onClose={closeTaskModalHandler}><NewTask onClose={closeTaskModalHandler}/></Modal> }
        </header>
    )

}

export default Header;