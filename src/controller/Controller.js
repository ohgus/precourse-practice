import OutputView from "../view/OutputView.js";
import InputView from "../view/InputView.js";
import Order from "../model/Order.js";

import Validator from "../utils/validator.js";

class Controller {
  #order;
  #validator;

  constructor() {
    this.#validator = new Validator();
    this.#order = new Order();
  }

  async start() {
    OutputView.printHello();
    await this.#readVisitDate();
  }

  async #readVisitDate() {
    try {
      const date = await InputView.readDate();
      this.#validator.validateDate(date);
      this.#order.setDate(date);
      return await this.#readOrderMenu();
    } catch (error) {
      OutputView.printError(error.message);
      return await this.#readVisitDate();
    }
  }

  async #readOrderMenu() {
    try {
      const orders = await InputView.readOrder();
      this.#order.setOrderMenu(orders);
      this.#validator.validateOrder(orders);
    } catch (error) {
      OutputView.printError(error.message);
      return await this.#readOrderMenu();
    }
  }
}

export default Controller;
