import { SmartDialogDesc } from "../types";

export type DialogState = SmartDialogDesc | null;

export const initialState: DialogState = null;

type OpenDialogAction = {
    type: "OPEN_DIALOG"
} & SmartDialogDesc;

type CloseDialogAction = {
    type: 'CLOSE_DIALOG'
}

type DialogActions = OpenDialogAction | CloseDialogAction;

export function reducer(state: DialogState, action: DialogActions): DialogState {
    const {type, ...others} = action;
    switch (type) {
        case "CLOSE_DIALOG":
            return null;
        case "OPEN_DIALOG":            
            return {...others} as DialogState;
        default:
            return state;
    }
}