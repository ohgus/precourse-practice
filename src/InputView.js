import { MESSAGE } from "./constants/messages.js";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(MESSAGE.read.date);
    return input;
  },

  async getDate() {
    const input = await this.readDate();
    // 예외처리 부분
    return input;
  },
};

export default InputView;
