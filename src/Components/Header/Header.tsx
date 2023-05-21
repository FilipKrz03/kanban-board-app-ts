import classes from './Header.module.scss';

const Header = () => {

    return(
        <header className={classes.header}>
            <span>Kanban</span>
            <button className={classes.adder}>Add new task</button>
        </header>
    )

}

export default Header;