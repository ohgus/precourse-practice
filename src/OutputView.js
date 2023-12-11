import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/messages.js";

export default OutputView = {
  printStart() {
    Console.print(MESSAGE.print.start);
  },

  printMenu() {
    Console.print("<주문 메뉴>");
    // ...
  },
  // ...
};
