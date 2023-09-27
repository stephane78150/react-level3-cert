import classNames from "classnames";
import React from "react";
import { WriteItem } from "./WriteItem";

type SetterComponentProps = Readonly<{
    keyNames: string[];
    className?: string;
}>

export const WriteCard: React.FC<SetterComponentProps> = ({keyNames, className}) => <div className={classNames('card', className)}>   
    <div className="card-header"><b>Write</b> to local storage</div>
    <div className="card-body">         
        {keyNames.map(key => (
            <WriteItem keyName={key} key={key} className="my-1" />
        ))}        
    </div>
</div>