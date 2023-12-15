import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/input.js";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.date);
    return input;
  },
  async readOrders() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.orders);
    return input;
  },
};

export default InputView;
