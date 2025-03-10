import { convertToTwoDigitFormat, getTimeUntilMidnight } from "@/lib/time";
import { useEffect, useState } from "react";
import TimeUnitDisplay from "./TimeUnitDisplay";

export default function SliderTimer() {
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => setCountdown(getTimeUntilMidnight()), 1000);

    return () => clearInterval(timer);
  }, []);

  const { hours, minutes, seconds } = countdown;

  return (
    <div
      className="flex flex-row-reverse font-bold text-stone-700"
      style={{ gap: "2px" }}
    >
      <TimeUnitDisplay>{convertToTwoDigitFormat(hours)}</TimeUnitDisplay>
      <span className="text-white">:</span>
      <TimeUnitDisplay>{convertToTwoDigitFormat(minutes)}</TimeUnitDisplay>
      <span className="text-white">:</span>
      <TimeUnitDisplay>{convertToTwoDigitFormat(seconds)}</TimeUnitDisplay>
    </div>
  );
}
