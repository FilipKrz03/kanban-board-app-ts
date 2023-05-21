import { useState } from 'react';
import NewBoard from './NewBoard';
import classes from './Header.module.scss';
import Modal from '../UI/Modal';


const Header = () => {

    const [isFormActive , setIsFormActive] = useState(false);

    const closeModalHandler = () => {
        setIsFormActive(false);
    }

    const openModalHandler = () => {
        setIsFormActive(true);
    }

    return(
        <header className={classes.header}>
            <span>Kanban</span>
            <button className={classes.adder} onClick={openModalHandler}>Add new board</button>
            {isFormActive && <Modal onClose={closeModalHandler}><NewBoard onClose={closeModalHandler}/></Modal>}
        </header>
    )

}

export default Header;