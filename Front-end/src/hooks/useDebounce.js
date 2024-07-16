import { useEffect } from "react";
import { useState } from "react";

const  useDebounce = (value, delay) => {
  const [valueDebounce, setValueDebounce] = useState("");
  useEffect(() => {
    const handle = setTimeout(() => {
      setValueDebounce(value);
    }, [delay]);
    return () => {
      clearTimeout(handle);
    };
  }, [value]);
  return valueDebounce;
};

export default useDebounce;