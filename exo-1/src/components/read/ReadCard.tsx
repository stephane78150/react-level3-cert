import classNames from "classnames";
import React from "react";
import { ReadItem } from "./Readtem";
import { useKeyList } from "../../hooks";
import { AddNewKey } from "../shared/AddNewKey";

type SetterComponentProps = Readonly<{    
    className?: string;
}>

export const ReadCard: React.FC<SetterComponentProps> = ({className}) => {
 const {keys, addKey} = useKeyList(['someKey', 'lastKey', 'anotherKey', 'missingKey']);

 return (<div className={classNames('card', className)}>   
    <div className="card-header"><b>Read</b> to local storage</div>
    <div className="card-body">         
        {keys.map(key => (
            <ReadItem keyName={key} key={key} className="my-1" />
        ))}        
    </div>
    <div className="card-footer">
        <AddNewKey label="Watch one more key" onKeyAdded={addKey} />
    </div>
</div>);
}