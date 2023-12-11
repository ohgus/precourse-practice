import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/messages.js";

const OutputView = {
  printStart() {
    Console.print(MESSAGE.print.start);
  },

  printEventPreviewMessage(date) {
    Console.print(
      `${MESSAGE.print.month} ${date}${MESSAGE.print.eventPreview}`
    );
  },

  printMenu(input) {
    const orders = input.split(",");
    Console.print(MESSAGE.print.orederMenu);

    orders.forEach((order) => {
      const [name, quantity] = order.split("-");
      Console.print(`${name} ${quantity}${MESSAGE.print.quantity}`);
    });
  },

  printPriceBeforeDiscount(price) {
    Console.print(MESSAGE.print.priceBeforeDiscount);
    Console.print(`${price.toLocaleString()}${MESSAGE.print.moneyType}`);
  },
};

export default OutputView;
