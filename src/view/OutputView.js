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

  printMyEvent(event, eventDiscount) {
    Console.print(MESSAGE.print.myEvent.title);
    if (event.length === 0) {
      Console.print(MESSAGE.print.myEvent.none);
    } else {
      for (let event in eventDiscount) {
        Console.print(
          `${event}: ${MESSAGE.print.myEvent.minus}${eventDiscount[
            event
          ].toLocaleString()}${UNIT.money}`
        );
      }
    }
  },

  printDiscountPrice(discountPrice, event) {
    Console.print(MESSAGE.print.discountPrice.title);
    if (event.length === 0) {
      Console.print(MESSAGE.print.discountPrice.zero);
    } else {
      Console.print(`-${discountPrice.toLocaleString()}${UNIT.money}`);
    }
  },

  printError(error) {
    Console.print(error);
  },
};

export default OutputView;
