// A utility function that returns as boolen value if one string is included in another

export const isMatchingTitle = (ele, val) => {
  // if the string is empty return false
  if (!ele) return false;

  return ele.toLowerCase().includes(val.toLowerCase());
};
