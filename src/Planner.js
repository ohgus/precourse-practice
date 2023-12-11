import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class Planner {
  #date;
  #orders;

  async start() {
    OutputView.printStart();

    this.#date = await InputView.getDate();
    this.#orders = await InputView.getOrder();
  }
}

export default Planner;
