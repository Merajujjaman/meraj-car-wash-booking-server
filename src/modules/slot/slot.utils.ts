export const getEndTime = (currentStartTime: string, minutes: number) => {
  const [hours, mins] = currentStartTime.split(":").map(Number);

  const totalMinutes = hours * 60 + mins + minutes;

  const newHours = Math.floor(totalMinutes / 60) % 24;
  const newMinutes = totalMinutes % 60;

  const formattedHours = String(newHours).padStart(2, "0");
  const formattedMinutes = String(newMinutes).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
};
