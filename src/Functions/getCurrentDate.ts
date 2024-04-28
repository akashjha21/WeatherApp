export const getCurrentDateTime = () => {
  const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[now.getDay()];
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  return `${day}, ${date} ${time}`;
};