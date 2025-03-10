// Calculates the time remaining until midnight in hours, minutes, and seconds.
export function getTimeUntilMidnight() {
  const midnightTimeStamp = new Date().setHours(24, 0, 0, 0);
  const currentTime = new Date().getTime();
  const remainUntilMidnight = midnightTimeStamp - currentTime;

  const hours = Math.floor(remainUntilMidnight / (1000 * 60 * 60));
  const minutes = Math.floor(
    (remainUntilMidnight % (1000 * 60 * 60)) / (1000 * 60),
  );
  const seconds = Math.floor((remainUntilMidnight % (1000 * 60)) / 1000);

  return { hours, minutes, seconds };
}

// Converts a given number to a two-digit string format by padding with a leading zero if necessary.
export function convertToTwoDigitFormat(unit: number) {
  return unit.toString().length > 1 ? `${unit}` : `0${unit}`;
}
