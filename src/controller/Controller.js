import OutputView from "../view/OutputView.js";
import InputView from "../view/InputView.js";
import Order from "../model/Order.js";
import Event from "../model/Event.js";
import Discount from "../model/Discount.js";

import Validator from "../utils/validator.js";

class Controller {
  #order;
  #event;
  #discount;
  #validator;

  constructor() {
    this.#validator = new Validator();
    this.#order = new Order();
    this.#event = new Event();
    this.#discount = new Discount();
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
      this.#validator.validateOrder(orders);
      this.#order.setOrderMenu(orders);
      this.#order.setPrice(orders);
      return this.#findMyEvent();
    } catch (error) {
      OutputView.printError(error.message);
      return await this.#readOrderMenu();
    }
  }

  #findMyEvent() {
    this.#event.setEvent(
      this.#order.getPrice(),
      this.#order.getDate(),
      this.#order.getOrderMenu()
    );

    this.#calculateDiscount();
  }

  #calculateDiscount() {
    this.#discount.setDiscountPrice(
      this.#event.getEvent(),
      this.#order.getDate(),
      this.#order.getOrderMenu()
    );

    this.#printPlanningResult();
  }

  #printPlanningResult() {
    OutputView.printPreviewMessage(this.#order.getDate());
    OutputView.printMenu(this.#order.getOrderMenu());
    OutputView.printBeforeDiscount(this.#order.getPrice());
    OutputView.printGift(this.#event.getEvent());
    OutputView.printMyEvent(
      this.#event.getEvent(),
      this.#discount.getEventDiscount()
    );
  }
}

export default Controller;
