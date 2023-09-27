import classNames from "classnames";
import React from "react";
import { ReadItem } from "./Readtem";

type SetterComponentProps = Readonly<{
    keyNames: string[];
    className?: string;
}>

export const ReadCard: React.FC<SetterComponentProps> = ({keyNames, className}) => <div className={classNames('card', className)}>   
    <div className="card-header"><b>Read</b> to local storage</div>
    <div className="card-body">         
        {keyNames.map(key => (
            <ReadItem keyName={key} key={key} className="my-1" />
        ))}        
    </div>
</div>