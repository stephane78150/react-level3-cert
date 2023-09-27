import classNames from "classnames";
import { ChangeEvent, FocusEvent, useCallback, useState, useMemo } from "react";

type TextEditorProps = Readonly<{
    id: string;
    value: string | null;
    onSave: (val: string) => void;
    className?: string;
}>

export const TextValueEditor: React.FC<TextEditorProps> =  ({value: originalValue, onSave, id, className}) => {
    const [edited, setEdited] = useState<string | null>(null);
    const onChange = useCallback( (e: ChangeEvent<HTMLInputElement>) => {
        setEdited(e.target.value);        
    }, [])
    const onBlur = useCallback( (e: FocusEvent<HTMLInputElement>) => {                
        const newValue = e.target.value;
        if (newValue !== originalValue) {
            onSave(newValue);
        }
        setEdited(null);        
    }, [onSave])

    const displayedValue = useMemo(() => edited ?? originalValue ?? '', [edited, originalValue]);    
    const editing = edited !== null;

    return <input type="text" className={classNames("form-control", className, {"bg-dark text-white": editing})} id={id} placeholder="Enter value here" value={displayedValue} onChange={onChange} onBlur={onBlur}/>
}