import React from 'react';
import { createPortal } from 'react-dom';
import Props from '../models/children';
import classes from './Modal.module.scss';



const Backdrop = () => {
    return(
        <div className={classes.backdrop}></div>
    )
}


const ModalOverlay:React.FC<Props> = (props) => {
    return(
    <div className={classes.modal}>
        {props.children}
    </div>
    );
}

const portalEl = document.getElementById('overlays') as HTMLElement; 


const Modal = () => {
    return(
        <React.Fragment>
            {createPortal(<Backdrop /> , portalEl)}
            {createPortal(<ModalOverlay /> , portalEl)}
        </React.Fragment>
    )
}

export default Modal;