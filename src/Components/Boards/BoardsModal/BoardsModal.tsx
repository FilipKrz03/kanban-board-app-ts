import classes from './BoardsModal.module.scss';
import Cart from '../../UI/Cart';
import BoardList from '../BoardList';
import CloseIcon from '@mui/icons-material/Close';



const BoardsModal:React.FC<{onClose : () => void}> = (props) => {
    return(
    
            <Cart>
                <div className={classes.container}>
                <CloseIcon className={classes.icon} fontSize='large' onClick = {() => {props.onClose()}} />
                <BoardList/>
                </div>
            </Cart>
    
    )
}

export default BoardsModal;