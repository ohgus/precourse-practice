import OutputView from "../view/OutputView.js";
import InputView from "../view/InputView.js";
import Callender from "../model/Callender.js";
import Order from "../model/Order.js";
import Event from "../model/Event.js";

import { ALL_EVENT } from "../constants/event.js";

class Controller {
  #visitDate;
  #orderInfo;
  #myEventInfo;
  #badge;

  constructor() {
    this.#badge = ALL_EVENT.badge.default;
  }

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
    this.#setBadge(this.#myEventInfo.getDiscount());
    this.#showResult();
  }

  #setBadge(discount) {
    if (discount >= ALL_EVENT.badge.santa.need) {
      this.#badge = ALL_EVENT.badge.santa.name;
    } else if (discount >= ALL_EVENT.badge.tree.need) {
      this.#badge = ALL_EVENT.badge.tree.name;
    } else if (discount >= ALL_EVENT.badge.star.need) {
      this.#badge = ALL_EVENT.badge.star.name;
    }
  }

  #showResult() {
    OutputView.printPreviewMent(this.#visitDate);
    OutputView.printMenu(this.#orderInfo.getOrders());
    OutputView.printBeforeDiscount(this.#orderInfo.getPrice());
    OutputView.printGift(this.#orderInfo.getPrice());
    OutputView.printMyEvent(this.#myEventInfo.getEventDiscount());
    OutputView.printDiscount(this.#myEventInfo.getDiscount());
    OutputView.printAfterDiscount(
      this.#orderInfo.getPrice(),
      this.#myEventInfo.getDiscount(),
      this.#myEventInfo.getEvent()
    );
  }
}

export default Controller;
