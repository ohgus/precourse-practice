import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import calculator from "./utils/calculator.js";
import Event from "./Event.js";

class Planner {
  #date;
  #orders;
  #totalPrice = 0;
  #benefits;
  #event;

  constructor() {
    this.#event = new Event();
  }

  async start() {
    OutputView.printStart();

    this.#date = await InputView.getDate();
    this.#orders = await InputView.getOrder();
    this.#totalPrice = calculator.calculateTotalPrice(this.#orders);
    this.#benefits = this.#event.getBenefits(
      this.#date,
      this.#orders,
      this.#totalPrice
    );

    console.log(this.#benefits);

    OutputView.printEventPreviewMessage(this.#date);
    OutputView.printMenu(this.#orders);
    OutputView.printPriceBeforeDiscount(this.#totalPrice);
  }
}

export default Planner;
