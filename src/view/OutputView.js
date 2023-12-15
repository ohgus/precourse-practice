import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/output.js";
import { ALL_EVENT, EVENT_NAME } from "../constants/event.js";

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  printPreviewMent(date) {
    Console.print(OUTPUT_MESSAGE.preview(date));
  },

  printMenu(orders) {
    Console.print(OUTPUT_MESSAGE.menuTitle);
    orders.forEach((order) => {
      const [menu, quantity] = order;
      Console.print(`${menu} ${quantity}${OUTPUT_MESSAGE.menuUnit}`);
    });
  },

  printBeforeDiscount(price) {
    Console.print(OUTPUT_MESSAGE.beforeDiscount);
    Console.print(`${price.toLocaleString()}${OUTPUT_MESSAGE.priceUnit}`);
  },

  printGift(price) {
    Console.print(OUTPUT_MESSAGE.giftTitle);
    if (price >= ALL_EVENT.gift.minPrice) {
      Console.print(OUTPUT_MESSAGE.gift);
    } else {
      Console.print(OUTPUT_MESSAGE.noEvent);
    }
  },

  printMyEvent(eventDiscount) {
    Console.print(OUTPUT_MESSAGE.myEventTitle);

    if (eventDiscount === null) {
      Console.print(OUTPUT_MESSAGE.noEvent);
    } else {
      eventDiscount.forEach((discount, index) => {
        if (discount > 0 && index === ALL_EVENT.dday.index) {
          Console.print(OUTPUT_MESSAGE.myEvent(discount, EVENT_NAME.dday));
        } else if (discount > 0 && index === ALL_EVENT.weekday.index) {
          Console.print(OUTPUT_MESSAGE.myEvent(discount, EVENT_NAME.weekday));
        } else if (discount > 0 && index === ALL_EVENT.weekend.index) {
          Console.print(OUTPUT_MESSAGE.myEvent(discount, EVENT_NAME.weekend));
        } else if (discount > 0 && index === ALL_EVENT.special.index) {
          Console.print(OUTPUT_MESSAGE.myEvent(discount, EVENT_NAME.special));
        } else if (discount > 0 && index === ALL_EVENT.gift.index) {
          Console.print(OUTPUT_MESSAGE.myEvent(discount, EVENT_NAME.gift));
        }
      });
    }
  },

  printDiscount(discount) {
    Console.print(OUTPUT_MESSAGE.discountTitle);
    if (discount === 0) {
      Console.print(`${discount}${OUTPUT_MESSAGE.priceUnit}`);
    } else {
      Console.print(OUTPUT_MESSAGE.discount(discount));
    }
  },

  printAfterDiscount(price, discount, event) {
    Console.print(OUTPUT_MESSAGE.afterDiscountTitle);
    const finalPrice = price - discount;

    if (discount === 0) {
      Console.print(`${price.toLocaleString()}${OUTPUT_MESSAGE.priceUnit}`);
    } else if (event[ALL_EVENT.gift.index]) {
      Console.print(
        OUTPUT_MESSAGE.afterDiscount(finalPrice + ALL_EVENT.gift.discount)
      );
    } else {
      Console.print(OUTPUT_MESSAGE.afterDiscount(finalPrice));
    }
  },

  printBadge(badge) {
    Console.print(OUTPUT_MESSAGE.badgeTitle);
    Console.print(badge);
  },

  printError(error) {
    Console.print(error);
  },
  // ...
};

export default OutputView;
