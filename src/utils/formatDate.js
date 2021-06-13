const formatHour = (hour) => {
  if (hour === 0) return 12;
  if (hour > 12) return hour - 12;

  return hour;
};

const formatMinutes = (minutes) => {
  if (minutes.toString().length === 1) return `0${minutes}`;

  return minutes;
};

const formatTimeOfDay = (hours) => {
  if (hours > 12) return 'PM';

  return 'AM';
};

const formatDate = (dateStamp) => {
  const date = new Date(dateStamp * 1000);
  const rawHours = date.getHours();

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = formatHour(rawHours);
  const minutes = formatMinutes(date.getMinutes());
  const timeOfDay = formatTimeOfDay(rawHours);
  return `${month}/${day} ${hour}:${minutes} ${timeOfDay}`;
};

export default formatDate;
