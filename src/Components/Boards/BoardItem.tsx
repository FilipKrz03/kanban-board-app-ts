import {useDispatch , useSelector} from 'react-redux';
import { RootState } from '../../store';
import { boardsActions } from '../../store/boards-slice';
import classes from "./BoardItem.module.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeleteIcon from '@mui/icons-material/Delete';

const BoardItem: React.FC<{
  title: string;
  id: number;
  key: number;
}> = (props) => {

  const dispatch = useDispatch();
  const activeBoardId:number|undefined = useSelector((state : RootState)=> state.board.activeBoard)

  const delateBoardHandler = () => {
    dispatch(boardsActions.removeBoard(props.id));
  }

  const setActiveBoard = () => {
    dispatch(boardsActions.changeActiveBoard(props.id));
  }

  return (
    <li
    onClick={setActiveBoard}
      className={`${classes.item}  ${
        activeBoardId === props.id ? classes.active : ""
      }`}
    >
      <DashboardIcon className={classes.dashboard} />
      <DeleteIcon className={classes.delate} onClick = {delateBoardHandler} />
      {props.title}
    </li>
  );
};

export default BoardItem;
