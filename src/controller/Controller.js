import OutputView from "../view/OutputView.js";
import InputView from "../view/InputView.js";
import Callender from "../model/Callender.js";
import Order from "../model/Order.js";

class Controller {
  #visitDate;
  #orderInfo;

  constructor() {}

  async start() {
    OutputView.printStart();
    await this.#getDateInput();
  }

  async #getDateInput() {
    try {
      const date = await InputView.readDate();
      this.#visitDate = new Callender(date).getVisitDate();
      return await this.#getOrderInput();
    } catch (error) {
      OutputView.printError(error.message);
      return await this.#getDateInput();
    }
  }

  async #getOrderInput() {
    try {
      const orderInput = await InputView.readOrders();
      this.#orderInfo = new Order(orderInput);
    } catch (error) {
      OutputView.printError(error.message);
      return await this.#getOrderInput();
    }
  }
}

export default Controller;
