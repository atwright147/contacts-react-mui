export const getInitials = (name = ''): string => {
  return name
    .replace(/\s+/g, ' ')
    .split(' ')
    .slice(0, 2)
    .map((n) => n?.[0].toUpperCase())
    .join('');
};
