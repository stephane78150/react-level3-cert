import classNames from "classnames";
import { useMyLocalStorage } from "../../hooks";
import { TextValueEditor } from "./TextValueEditor";
import { FC } from "react";
import { useRenderCount } from "@uidotdev/usehooks";
import { RenderCount } from "../RenderCount";

export type WriteItemProps = Readonly<{
    keyName: string;
    className?: string;
}>

export const WriteItem:  FC<WriteItemProps> = ({keyName, className}) => {
const [value, setValue] = useMyLocalStorage(keyName);    
const renderCount = useRenderCount();
const id = `editkey_${keyName}`;
return (<div  className={classNames("row align-items-center", className)}>                
    <label htmlFor={id}  className="col-4">Key <em>{keyName}</em></label>                
    <div className="col-7">
       <TextValueEditor id={id} value={value} onSave={setValue}  />
    </div>
    <div className="col-1">
        <RenderCount count={renderCount} color="dark"/>
    </div>
</div>);
}
