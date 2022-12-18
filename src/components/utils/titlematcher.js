export const isMatchingTitle = (ele, val) => {
  // if the title is null return false
  if (!ele.original_title) {
    return false;
  }
  return ele.original_title.toLowerCase().includes(val.toLowerCase());
};
