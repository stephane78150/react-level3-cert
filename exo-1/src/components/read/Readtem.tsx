import classNames from "classnames";
import { useMyLocalStorage } from "../../hooks";
import { FC } from "react";
import { useRenderCount } from "@uidotdev/usehooks";
import { RenderCount } from "../shared/RenderCount";

export type ReadItemProps = Readonly<{
    keyName: string;
    className?: string;
}>

export const ReadItem:  FC<ReadItemProps> = ({keyName, className}) => {
    const [value] = useMyLocalStorage(keyName);    
    const renderCount = useRenderCount();    
    const id = `showkey_${keyName}`;

    return (
    <div  className={classNames("row align-items-center", className)}>                
        <label htmlFor={id}  className="col-4">Key <em>{keyName}</em></label>                
        <label id={id} className="col-7">{value}</label>
        <div className="col-1">
            <RenderCount count={renderCount} color="danger"/>
        </div>
    </div>);
}

