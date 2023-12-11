import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import calculator from "./utils/calculator.js";

class Planner {
  #date;
  #orders;
  #totalPrice = 0;

  async start() {
    OutputView.printStart();

    this.#date = await InputView.getDate();
    this.#orders = await InputView.getOrder();
    this.#totalPrice = calculator.calculateTotalPrice(this.#orders);

    OutputView.printEventPreviewMessage(this.#date);
    OutputView.printMenu(this.#orders);
    OutputView.printPriceBeforeDiscount(this.#totalPrice);
  }
}

export default Planner;
