import { useState } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  }
];

export const useLocalStorage: UseLocalStorage = (key) => {
  const [value, setValue] = useState<LocalStorageReturnValue>(
    localStorage.getItem(key)
  );

  const setItem = (value: LocalStorageSetValue) => {
    if (key && value) {
      localStorage.setItem(key, value);
      setValue(value);
    }
  };

  const removeItem = () => {
    if (key) {
      localStorage.removeItem(key);
      setValue(null);
    }
  };

  return [value, { setItem, removeItem }];
};
