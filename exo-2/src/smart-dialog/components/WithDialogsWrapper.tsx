import React, { useCallback, useReducer, FC, PropsWithChildren } from "react";
import { reducer, initialState } from "../state/reducer";
import { SmartDialogDesc } from "../types";
import { DialogApiContext } from "../contexts/DialogApiContext";
import { ModalOrModelessDialog } from "./ModalOrModelessDialog";
import { createPortal } from "react-dom";

type CurrentDisplayedDialogProps = SmartDialogDesc & {doClose: () => void};


const CurrentDisplayedDialog: React.FC<CurrentDisplayedDialogProps> = ({doClose, onClose, ...otherDialogProps}) => {
    const closeAndNotify = useCallback(() => {
        doClose();
        if (onClose !== null) {
            onClose();
        }
    }, [onClose, doClose]);
    return <ModalOrModelessDialog {...otherDialogProps} onClose={closeAndNotify} />;
}

export const WithDialogsWrapper: FC<PropsWithChildren> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);    
    const openDialog = useCallback((dialog: SmartDialogDesc) => dispatch({type: 'OPEN_DIALOG', ...dialog}), [dispatch]);
    const closeDialog = useCallback(() => dispatch({type: 'CLOSE_DIALOG'}), [dispatch]);
    const api = {openDialog, closeDialog};

    if (state === null) {
        return <DialogApiContext.Provider value={api}>{children}</DialogApiContext.Provider>
    }        

    return (<DialogApiContext.Provider value={api}>
        <>
            {children}
            {createPortal(<CurrentDisplayedDialog {...state} doClose={closeDialog}/>, document.body)}
        </>
    </DialogApiContext.Provider>);
}