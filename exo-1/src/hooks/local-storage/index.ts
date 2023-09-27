export function getLocalStorageValue(key: string): string | null {        
    const value = window.localStorage.getItem(key);    
    return value;
}


export function setLocalStorageValue(key: string, value: string): void {    
    window.localStorage.setItem(key, value);       
}