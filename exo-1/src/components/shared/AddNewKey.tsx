import React, { useCallback, useState } from "react"
import { TextValueEditor } from "../write/TextValueEditor";

type AddNewKeyProps = Readonly<{
    label: string;
    onKeyAdded: (keyName: string) => void;
}>

export const AddNewKey: React.FC<AddNewKeyProps> = ({onKeyAdded, label}) => {
    const [newKey, setNewKey] = useState('');
    const addMe = useCallback(() => {
        if (newKey) {
            onKeyAdded(newKey);
            setNewKey('');
        }
    }, [onKeyAdded, newKey]);

    return (<div className="row">
        <label htmlFor="newKey"  className="col-4">{label}</label>                
        <div className="col-6">
        <TextValueEditor id="newKey" value={newKey} onSave={setNewKey}  />
        </div>
        <div className="col-2">
            <button className="btn btn-dark" onClick={addMe}>Add</button>
        </div>
    </div>);
}