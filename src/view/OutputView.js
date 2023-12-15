import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/output.js";

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

  printError(error) {
    Console.print(error);
  },
  // ...
};

export default OutputView;
