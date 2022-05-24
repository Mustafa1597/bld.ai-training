import { useState } from "react";

const useInput = (validate) => {
  const [inputState, setInputState] = useState({
    enteredValue: "",
    isValidValue: false,
  });
  const [Blurred, setBlurred] = useState(false);

  const setEnteredValue = (value) => {
    setInputState({
      enteredValue: value,
      isValidValue: validate(value),
    });
  };

  const setIsBlurred = (value) => {
    setBlurred(value);
  };

  return {
    enteredValue: inputState.enteredValue,
    isValidValue: inputState.isValidValue,
    isBlurred: Blurred,
    setEnteredValue,
    setIsBlurred,
  };
};

export default useInput;
