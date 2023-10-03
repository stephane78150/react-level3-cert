import { useContext } from "react";
import { DialogApiContext } from "../contexts/DialogApiContext";
import { DialogApi } from "../types";

export function useDialogApi(): DialogApi {
    const api = useContext(DialogApiContext);
    if (api === null) {
        throw new Error("Please use this hooks on a component inside 'WithDialogsWrapper' component hierarchy");
    }
    return api!;
}