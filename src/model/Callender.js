import { ERROR } from "../constants/error.js";

class Callender {
  #date;

  constructor(input) {
    this.#validate(input);
    this.#date = input;
  }

  #validate(input) {
    if (!ERROR.dateRegex.test(input)) {
      throw new Error(ERROR.message.date);
    }
  }
}

export default Callender;
