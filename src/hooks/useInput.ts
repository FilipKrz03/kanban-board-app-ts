import { useState } from "react";

const useInput = (validateFn: (inputValue: string) => boolean) => {

  const [isTouched, setIsTouched] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const isValid: boolean = validateFn(inputValue);
  const hasError: boolean = !isValid && isTouched;

  const blurHandler = () => {
    setIsTouched(true);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const reset = () => {
    setInputValue('')
    setIsTouched(false);
  }

  return{
    inputValue , 
    hasError , 
    blurHandler , 
    changeHandler , 
    reset , 
    isValid
  }
};

export default useInput;
