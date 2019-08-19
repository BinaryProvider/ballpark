import { useState } from 'react';

export const useStorage = (
  key: string,
  initialValue: any,
  persist = false
): any => {
  const storage = persist ? localStorage : sessionStorage;

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: any): void => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      storage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};
