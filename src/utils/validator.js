import { MESSAGE } from "../constants/message.js";
import { ERROR } from "../constants/error.js";

export const validator = {
  validateDate: function (date) {
    if (!ERROR.date.regex.test(date)) {
      throw new Error(MESSAGE.error.date);
    }
  },
};
