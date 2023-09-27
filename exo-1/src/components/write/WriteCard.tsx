import classNames from "classnames";
import React from "react";
import { WriteItem } from "./WriteItem";
import { useKeyList } from "../../hooks";
import { AddNewKey } from "../shared/AddNewKey";

type SetterComponentProps = Readonly<{
    className?: string;
}>

export const WriteCard: React.FC<SetterComponentProps> = ({className}) => {
  const {keys, removeKey, addKey} = useKeyList(['someKey', 'anotherKey', 'lastKey'])
  return (
  <div className={classNames('card', className)}>   
    <div className="card-header"><b>Write</b> to local storage</div>
    <div className="card-body">         
        {keys.map(key => (
            <WriteItem keyName={key} key={key} className="my-1" onDelete={removeKey}/>
        ))}        
    </div>
    <div className="card-footer">
        <AddNewKey label="Edit one more key"  onKeyAdded={addKey} />
    </div>
</div>)
}