import { useState } from "react";
import { useInterval } from "./useInterval";

export const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState<string>("00:00");
  const date = new Date();
  useInterval(() => {
    const getCurrentTime = date.getTime();
    const getCurrentTimezoneOffset = date.getTimezoneOffset();

    const timeInClientTimezone =
      getCurrentTime + getCurrentTimezoneOffset * 60000;

    const myLocalTime = new Date(timeInClientTimezone + 3600000 * 5.5);

    const displayTime = myLocalTime.toTimeString()?.slice(0, 5);

    setCurrentTime(displayTime);
  }, 1000);

  const currentDay = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date);

  return { currentTime, currentDay };
};
