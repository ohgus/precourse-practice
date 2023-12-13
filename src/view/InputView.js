import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/message.js";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(MESSAGE.read.date);
    return Number(input);
  },

  async readOrder() {
    const input = await Console.readLineAsync(MESSAGE.read.order);
    return input.split(",");
  },
};

export default InputView;
