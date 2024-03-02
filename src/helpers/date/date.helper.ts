export const isoToLocaleString = (date: string): string => {
  const parsedDate = new Date(date);
  return new Intl.DateTimeFormat('en-GB', { dateStyle: 'long', timeStyle: undefined, timeZone: 'Europe/London' }).format(parsedDate);
};
