// A utility function that returns as boolen value if one string is included in another
// if the string is empty return false

export const isMatchingTitle = (ele, val) =>
  !ele ? false : ele.toLowerCase().includes(val.toLowerCase());
