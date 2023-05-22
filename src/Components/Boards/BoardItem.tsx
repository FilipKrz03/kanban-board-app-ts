import classes from "./BoardItem.module.scss";

const BoardItem: React.FC<{
  title: string;
  id: number;
  key: number;
  activeId: number | undefined;
  setActiveId: (id:number) => void , 
}> = (props) => {
  return (
    <li
    onClick={()=> props.setActiveId(props.id)}
      className={`${classes.item}  ${
        props.activeId === props.id ? classes.active : ""
      }`}
    >
      {props.title}
    </li>
  );
};

export default BoardItem;
