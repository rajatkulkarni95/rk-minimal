import { useEffect, useState } from "react";
import { useInterval } from "./useInterval";

export const useCurrentTime = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [currentTime, setCurrentTime] = useState<string>("00:00");
  const [currentDay, setCurrentDay] = useState<string>("");

  const formatTime = () => {
    const getCurrentTime = date.getTime();
    const getCurrentTimezoneOffset = date.getTimezoneOffset();

    const timeInClientTimezone =
      getCurrentTime + getCurrentTimezoneOffset * 60000;

    const myLocalTime = new Date(timeInClientTimezone + 3600000 * 5.5);

    const displayTime = myLocalTime.toTimeString()?.slice(0, 5);

    setCurrentTime(displayTime);
    setCurrentDay(
      new Intl.DateTimeFormat("en-US", {
        weekday: "long",
      }).format(date)
    );
  };

  useInterval(() => {
    setDate(new Date());
  }, 15 * 1000);

  useEffect(() => {
    formatTime();
  }, [date]);

  return { currentTime, currentDay };
};
