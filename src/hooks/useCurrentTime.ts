import { useEffect, useState } from "react";

export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState<string>();

  useEffect(() => {
    const date = new Date();
    const getCurrentTime = date.getTime();
    const getCurrentTimezoneOffset = date.getTimezoneOffset();

    const timeInClientTimezone =
      getCurrentTime + getCurrentTimezoneOffset * 60000;

    const myLocalTime = new Date(timeInClientTimezone + 3600000 * 5.5);

    const displayTime = myLocalTime.toTimeString()?.slice(0, 5);

    setCurrentTime(displayTime);
  }, []);

  return { currentTime };
};
