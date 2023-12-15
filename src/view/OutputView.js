import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/output.js";

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  printMenu() {
    Console.print("<주문 메뉴>");
    // ...
  },

  printError(error) {
    Console.print(error);
  },
  // ...
};

export default OutputView;
