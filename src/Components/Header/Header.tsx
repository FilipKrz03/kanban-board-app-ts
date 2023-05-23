import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import NewTask from '../NewTask/NewTask';
import NewBoard from '../NewBoard/NewBoard';
import classes from './Header.module.scss';
import Modal from '../UI/Modal';


const Header = () => {

    const [isFormActive , setIsFormActive] = useState(false);
    const boardsNumber:number = useSelector((state : RootState) => state.board.boards.length);

    const closeModalHandler = () => {
        setIsFormActive(false);
    }

    const openModalHandler = () => {
        setIsFormActive(true);
    }

    return(
        <header className={classes.header}>
            <span>Kanban</span>
            {boardsNumber > 0 && <button className={classes.adder}>+Add new Task</button>}
            <button className={classes.adder} onClick={openModalHandler}>+Add new board</button>
            {isFormActive && <Modal onClose={closeModalHandler}><NewBoard onClose={closeModalHandler}/></Modal>}
            <Modal onClose={closeModalHandler}><NewTask/></Modal>
        </header>
    )

}

export default Header;