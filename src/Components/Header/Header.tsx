import classes from './Header.module.scss';
import Modal from '../UI/Modal';
import { useState } from 'react';

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
            <button className={classes.adder} onClick={openModalHandler}>Add new task</button>
            {isFormActive && <Modal onClose={closeModalHandler}>Test</Modal>}
        </header>
    )

}

export default Header;