const getTitle = (title) => {
  return title
    .toLowerCase()
    .replace(/[%#<>@;:/?!&+=${}',.-]/g, '')
    .split(/\s+/)
    .join('-');
};

export default getTitle;
