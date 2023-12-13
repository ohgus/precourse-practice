import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/message.js";
import { UNIT } from "../constants/unit.js";

const OutputView = {
  printMenu(orders) {
    Console.print(MESSAGE.print.orderMenu);
    orders.forEach((order) => {
      const [menu, quantity] = order.split("-");
      Console.print(`${menu} ${quantity}${UNIT.menu}`);
    });
  },
  // ...
};

export default OutputView;
