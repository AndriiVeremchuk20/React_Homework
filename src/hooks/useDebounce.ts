import { useRef, useCallback } from "react";

type Timer = ReturnType<typeof setTimeout>;

export const useDebounce = () => {
  const timerRef = useRef<Timer>();

  return useCallback(
    (callback: () => any, delay: number = 200) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(
        () => {
          callback();
        },
        delay > 0 ? delay : 200
      );
    },
    [timerRef.current]
  );
};
