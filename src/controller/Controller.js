import OutputView from "../view/OutputView.js";
import InputView from "../view/InputView.js";
import Order from "../model/Order.js";

import { validator } from "../utils/validator.js";

class Controller {
  #order;

  constructor() {
    this.#order = new Order();
  }

  async start() {
    OutputView.printHello();
    await this.#readVisitDate();
  }

  async #readVisitDate() {
    try {
      const date = await InputView.readDate();
      this.#order.setDate(date);
      validator.validateDate(date);
    } catch (error) {
      OutputView.printError(error.message);
      return await this.#readVisitDate();
    }
  }
}

export default Controller;
