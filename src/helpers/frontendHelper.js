/** @format */

import SecureLS from "secure-ls";
import dayjss from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";

dayjss.extend(customParseFormat);
dayjss.extend(advancedFormat);
dayjss.extend(weekday);
dayjss.extend(localeData);
dayjss.extend(weekOfYear);
dayjss.extend(weekYear);

const ls = new SecureLS();
export const setLocalStorage = (key, value) => {
  if (window !== "undefined") {
    ls.set(key, value);
  }
};
export const getLocalStorage = (key) => {
  return ls.get(key);
};
export const removeLocalStorage = (key) => {
  if (window !== "undefined") {
    localStorage.removeItem(key);
  }
};
export const aspectRatioValidator = (rule, value, callback) => {
  const pattern = /^\d+\/\d+$/;
  if (value && !pattern.test(value)) {
    callback('Please enter a valid aspect ratio (e.g. "16/9")');
  } else {
    callback();
  }
};
export const dayjs = dayjss;
