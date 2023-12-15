import Controller from "./controller/Controller.js";

class App {
  #controller;

  constructor() {
    this.#controller = new Controller();
  }

  async run() {
    this.#controller.start();
  }
}

export default App;
