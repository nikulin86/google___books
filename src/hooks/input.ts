import { ChangeEvent, useState } from "react";

interface inputReturn {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setValue:(value:string) => void
}

export function useInput(initialValue: string = ""): inputReturn {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    // setValue("")
  };

  return {
    value,
    onChange,
    setValue
  };
}
