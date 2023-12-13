import OutputView from "../view/OutputView.js";
import InputView from "../view/InputView.js";
import Order from "../model/Order.js";

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
    } catch (error) {}
  }
}
