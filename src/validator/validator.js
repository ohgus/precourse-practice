import { ERROR } from "../constants/error.js";
import { DATE } from "../constants/eventInfo.js";

const validator = {
  validateDate(input) {
    const date = Number(input);

    if (!isFinite(date)) {
      throw new Error(ERROR.date);
    } else if (date > DATE.max || date < DATE.min) {
      throw new Error(ERROR.date);
    }
  },
};

export default validator;

validator.validateDate("1");
