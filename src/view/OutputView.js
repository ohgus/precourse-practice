import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/message.js";
import { UNIT } from "../constants/unit.js";

const OutputView = {
  printHello() {
    Console.print(MESSAGE.print.hello);
  },

  printMenu(orders) {
    Console.print(MESSAGE.print.orderMenu);
    orders.forEach((order) => {
      const [menu, quantity] = order.split("-");
      Console.print(`${menu} ${quantity}${UNIT.menu}`);
    });
  },

  printError(error) {
    Console.print(error);
  },
};

export default OutputView;
