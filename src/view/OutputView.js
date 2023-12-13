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

  printAfterDiscount(price, discountPrice, event) {
    Console.print(MESSAGE.print.afterDiscount.title);
    if (event.length === 0) {
      Console.print(`${price.toLocaleString()}${UNIT.money}`);
    } else {
      let totalPrice = price - discountPrice;
      if (event.includes(EVENT_INFO.gift.name)) {
        totalPrice += EVENT_INFO.gift.giftAmount;
        Console.print(`${totalPrice.toLocaleString()}${UNIT.money}`);
      } else {
        Console.print(`${totalPrice.toLocaleString()}${UNIT.money}`);
      }
    }
  },

  printBadge(discountPrice, event) {
    Console.print(MESSAGE.print.badge.title);
    if (event.length === 0 || discountPrice < MESSAGE.print.badge.level.one) {
      Console.print(MESSAGE.print.badge.name.none);
    } else {
      if (discountPrice >= MESSAGE.print.badge.level.three) {
        Console.print(MESSAGE.print.badge.name.santa);
      } else if (discountPrice >= MESSAGE.print.badge.level.two) {
        Console.print(MESSAGE.print.badge.name.tree);
      } else if (discountPrice >= MESSAGE.print.badge.level.one) {
        Console.print(MESSAGE.print.badge.name.star);
      }
    }
  },

  printError(error) {
    Console.print(error);
  },
};

export default OutputView;
