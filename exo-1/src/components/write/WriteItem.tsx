import classNames from "classnames";
import { useMyLocalStorage } from "../../hooks";
import { TextValueEditor } from "./TextValueEditor";
import { FC, useCallback } from "react";
import { useRenderCount } from "@uidotdev/usehooks";
import { RenderCount } from "../shared/RenderCount";

export type WriteItemProps = Readonly<{
    keyName: string;
    className?: string;
    onDelete: (key: string) => void;
}>

export const WriteItem:  FC<WriteItemProps> = ({keyName, className, onDelete}) => {
const [value, setValue, removeKey] = useMyLocalStorage(keyName);    
const renderCount = useRenderCount();
const deleteMe = useCallback(() => {
     onDelete(keyName);
     removeKey();
}, [keyName]);
const id = `editkey_${keyName}`;

return (<div  className={classNames("row align-items-center", className)}>                
    <label htmlFor={id}  className="col-4">Key <em>{keyName}</em></label>                
    <div className="col-4">
       <TextValueEditor id={id} value={value} onSave={setValue}  />
    </div>
    <div className="col-3">
        <button className="btn btn-icon btn-outline-dark" onClick={deleteMe} title="Both clean local storage value & stop editing this key">Remove</button>
    </div>
    <div className="col-1">
        <RenderCount count={renderCount} color="dark"/>
    </div>
</div>);
}
