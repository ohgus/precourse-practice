import Planner from "./Planner.js";

class App {
  #planner;

  constructor() {
    this.#planner = new Planner();
  }

  async run() {
    await this.#planner.start();
  }
}

export default App;
