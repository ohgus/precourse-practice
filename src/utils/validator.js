import { MESSAGE } from "../constants/message.js";
import { ERROR } from "../constants/error.js";

class Validator {
  validateDate(date) {
    if (!ERROR.date.regex.test(date)) {
      throw new Error(MESSAGE.error.date);
    }
  }
}

export default Validator;
