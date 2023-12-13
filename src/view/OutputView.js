import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/message.js";
import { UNIT } from "../constants/unit.js";
import { EVENT_INFO } from "../constants/event.js";

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

  printPreviewMessage(date) {
    Console.print(MESSAGE.print.preview(date));
  },

  printBeforeDiscount(price) {
    Console.print(MESSAGE.print.beforeDiscount);
    Console.print(`${price.toLocaleString()}${UNIT.money}`);
  },

  printGift(event) {
    Console.print(MESSAGE.print.giftTitle);
    if (event.includes(EVENT_INFO.gift.name)) {
      Console.print(MESSAGE.print.giftItem.have);
    } else {
      Console.print(MESSAGE.print.giftItem.none);
    }
  },

  printError(error) {
    Console.print(error);
  },
};

export default OutputView;
