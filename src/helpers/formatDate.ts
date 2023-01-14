export const formatDate = (date: Date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[date.getMonth()];

  let day = `${date.getDate()}`;
  switch (day) {
    case '1':
      day += 'st';
      break;
    case '2':
      day += 'nd';
      break;
    case '3':
      day += 'rd';
      break;
    default:
      day += 'th';
  }

  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};
