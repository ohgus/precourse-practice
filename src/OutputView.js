import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/messages.js";

const OutputView = {
  printStart() {
    Console.print(MESSAGE.print.start);
  },

  printMenu(input) {
    const orders = input.split(",");
    Console.print(MESSAGE.print.orederMenu);

    orders.forEach((order) => {
      const [name, quantity] = order.split("-");
      Console.print(`${name} ${quantity}${MESSAGE.print.quantity}`);
    });
  },
  // ...
};

export default OutputView;
