import { useState , useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import SettingsIcon from '@mui/icons-material/Settings';
import NewTask from '../NewTask/NewTask';
import NewBoard from '../NewBoard/NewBoard';
import classes from './Header.module.scss';
import Modal from '../UI/Modal';


const Header = () => {

    const [isFormActive , setIsFormActive] = useState<boolean>(false);
    const [isNewTaskFormActive , setIsNewTaskFormActive] = useState<boolean>(false);
    const boardsNumber:number = useSelector((state : RootState) => state.board.boards.length);
    const [windowWidth , setWindowwidth] = useState(window.innerWidth);
    console.log(windowWidth);

   useEffect(() => {
        const handleResize = () => {
          setWindowwidth(window.innerWidth);
    }
       
            window.addEventListener('resize', handleResize)
  
        
        return () => {
            window.removeEventListener('resize' , handleResize);
            
        }
      })



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
            {boardsNumber > 0 && <button className={classes.adder} onClick={openTaskModalHandler}>{windowWidth > 800 ? '+Add new Task' : '+Task'}</button>}
            <button className={classes.adder} onClick={openModalHandler}>{windowWidth > 800 ? '+Add new Board' : '+Board'}</button>
            {windowWidth < 600 && <SettingsIcon fontSize='large' className={classes.settings} />}
            {isFormActive && <Modal onClose={closeModalHandler}><NewBoard onClose={closeModalHandler}/></Modal>}
           { isNewTaskFormActive &&  <Modal onClose={closeTaskModalHandler}><NewTask onClose={closeTaskModalHandler}/></Modal> }
        </header>
    )

}

export default Header;