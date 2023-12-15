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
  // ...
};

export default OutputView;
