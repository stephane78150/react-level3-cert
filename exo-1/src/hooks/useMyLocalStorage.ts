import { useCallback, useMemo, useSyncExternalStore } from "react";
import { subscribeWithCleanup, notifyExistingSubscriber } from "./subscribers";
import { getLocalStorageValue, setLocalStorageValue, removeLocalStorageValue } from "./local-storage";

type SetKeyValue = (val: string) => void;

type RemoveThisKey = () => void;

type MyLocalStorage = [string | null, SetKeyValue, RemoveThisKey];

export function useMyLocalStorage(key: string): MyLocalStorage {    
    const subscribeToStore = useMemo( () => (notifyMe: () => void) => subscribeWithCleanup(key)(notifyMe), [key]);        
    const getSnapshot = useCallback(() => getLocalStorageValue(key), [key])

    const value = useSyncExternalStore(subscribeToStore, getSnapshot);
    const setKeyValue = useCallback((value: string) => {
        setLocalStorageValue(key, value)
        notifyExistingSubscriber(key);
    }, [key]);
    const removeKey = useCallback(() => {
        removeLocalStorageValue(key);
        notifyExistingSubscriber(key);
    }, [key]);

    return [value, setKeyValue, removeKey];
}