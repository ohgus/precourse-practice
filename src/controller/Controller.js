import OutputView from "../view/OutputView.js";
import InputView from "../view/InputView.js";
import Callender from "../model/Callender.js";
import Order from "../model/Order.js";
import Event from "../model/Event.js";

class Controller {
  #visitDate;
  #orderInfo;
  #myEventInfo;

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
      return this.#setEventInfo(
        this.#orderInfo.getCategoryCount(),
        this.#orderInfo.getPrice(),
        this.#visitDate
      );
    } catch (error) {
      OutputView.printError(error.message);
      return await this.#getOrderInput();
    }
  }

  #setEventInfo(category, price, date) {
    this.#myEventInfo = new Event(category, price, date);
    this.#showResult();
  }

  #showResult() {
    OutputView.printMenu(this.#orderInfo.getOrders());
  }
}

export default Controller;
