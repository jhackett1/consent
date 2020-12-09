import React from "react"
import { Dialog as BaseDialog } from "@reach/dialog"
import "@reach/dialog/styles.css";
import close from "../assets/close.svg"

const Dialog = ({
    open,
    children,
    onDismiss,
    title
}) =>
    <BaseDialog 
        className="ct-dialog"
        open={open}
        onDismiss={onDismiss}
        aria-label={title}
    >
        {children}
        <button 
            className="ct-dialog__close"
            onClick={onDismiss}
        >
            <img src={close} alt="Close" title="Close"/>
        </button>
    </BaseDialog>

export default Dialog