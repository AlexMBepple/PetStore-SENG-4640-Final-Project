import { useEffect, useState } from "react";

export function useLocalStorage (key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const jsonvalue = localStorage.getItem(key);
        if (jsonvalue != null) 
            return JSON.parse(jsonvalue);
        else
            return initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue])

    return [storedValue, setStoredValue]
}