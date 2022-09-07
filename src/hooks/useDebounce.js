import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounceValue;
};

/*
  ? INFO
    * useDebounce state값을 반환하는 custom hook 입니다.
    * 검색 문자열(value)과 딜레이 시킬 시간값(delay)을 입력받아 state에 저장하는 시간을 지연시키고 지연된 업데이트 값을 반환합니다.
*/
