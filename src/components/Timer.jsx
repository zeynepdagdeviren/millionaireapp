import { useEffect, useState } from "react";

export default function Timer({ setStop, questionNumber }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setStop(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [setStop]);

  useEffect(() => {
    setTimer(30); 
  }, [questionNumber]);

  return timer;
}




