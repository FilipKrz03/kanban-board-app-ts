import {useDispatch} from 'react-redux';
import { boardsActions } from '../../store/boards-slice';
import classes from "./BoardItem.module.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeleteIcon from '@mui/icons-material/Delete';

const BoardItem: React.FC<{
  title: string;
  id: number;
  key: number;
  activeId: number | undefined;
  setActiveId: (id:number) => void , 
}> = (props) => {

  const dispatch = useDispatch();

  const delateBoardHandler = () => {
    dispatch(boardsActions.removeBoard(props.id));
  }

  return (
    <li
    onClick={()=> props.setActiveId(props.id)}
      className={`${classes.item}  ${
        props.activeId === props.id ? classes.active : ""
      }`}
    >
      <DashboardIcon className={classes.dashboard} />
      <DeleteIcon className={classes.delate} onClick = {delateBoardHandler} />
      {props.title}
    </li>
  );
};

export default BoardItem;
