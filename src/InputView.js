import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/messages.js";
import validator from "./validator/validator.js";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(MESSAGE.read.date);
    return input;
  },

  async getDate() {
    const input = await this.readDate();
    validator.validateDate(input);
    return input;
  },

  async readOrder() {
    const input = await Console.readLineAsync(MESSAGE.read.order);
    return input;
  },

  async getOrder() {
    const input = await this.readOrder();
    // 예외처리 부분
    return input;
  },
};

export default InputView;
