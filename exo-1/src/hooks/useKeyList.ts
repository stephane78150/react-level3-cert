import { useCallback, useState } from "react";


type KeyList = ReadonlyArray<string>;
type KeyFunc = (key: string) => void;

type KeyListApi = Readonly<{
    keys: KeyList;
    addKey: KeyFunc;
    removeKey: KeyFunc;    
}>

export function useKeyList(defaultKeys: KeyList): KeyListApi {
    const [keys, setKeys] = useState<KeyList>(defaultKeys);
    const addKey = useCallback((newKey :string) => setKeys(oldKeys => ([...oldKeys.filter(k => k !== newKey), newKey]) ), []);
    const removeKey = useCallback((newKey :string) => setKeys(oldKeys => oldKeys.filter(k => k !== newKey)), [])
    return {keys, addKey, removeKey};
}