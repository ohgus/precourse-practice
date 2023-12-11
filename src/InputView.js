import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constants/messages.js";
import validator from "./validator/validator.js";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(MESSAGE.read.date);
    return input;
  },

  async getDate() {
    try {
      const input = await this.readDate();
      validator.validateDate(input);
      return input;
    } catch (e) {
      Console.print(e.message);
      return await this.getDate();
    }
  },

  async readOrder() {
    const input = await Console.readLineAsync(MESSAGE.read.order);
    return input;
  },

  async getOrder() {
    try {
      const input = await this.readOrder();
      validator.validateOrders(input);
      return input;
    } catch (e) {
      Console.print(e.message);
      return await this.getOrder();
    }
  },
};

export default InputView;
