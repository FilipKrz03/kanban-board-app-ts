import classes from './Cart.module.scss';
import Props from '../models/children';

const Cart:React.FC<Props> = (props) => {
    return(
        <div className={classes.cart}>
            {props.children}
        </div>
    );
}

export default Cart;