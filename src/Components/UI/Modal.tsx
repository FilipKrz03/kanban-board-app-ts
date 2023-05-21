import React from "react";
import { createPortal } from "react-dom";
import Props from "../models/children";
import classes from "./Modal.module.scss";

const Backdrop: React.FC<{ onClose: () => void }> = (props) => {
  return <div className={classes.backdrop} onClick={() => props.onClose()} />;
};

const ModalOverlay: React.FC<Props> = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const portalEl = document.getElementById("overlays") as HTMLElement;

const Modal: React.FC<{ onClose: () => void; children?: React.ReactNode }> = (
  props
) => {
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop
          onClose={() => {
            props.onClose();
          }}
        />,
        portalEl
      )}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEl)}
    </React.Fragment>
  );
};

export default Modal;
