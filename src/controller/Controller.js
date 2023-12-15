import OutputView from "../view/OutputView.js";
import InputView from "../view/InputView.js";
import Callender from "../model/Callender.js";

class Controller {
  #visitDate;

  constructor() {}

  async start() {
    OutputView.printStart();
    await this.#getDateInput();
  }

  async #getDateInput() {
    try {
      const date = await InputView.readDate();
      this.#visitDate = new Callender(date).getVisitDate();
    } catch (error) {
      OutputView.printError(error.message);
      return await this.#getDateInput();
    }
  }
}

export default Controller;
