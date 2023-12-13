import { MESSAGE } from "../constants/message.js";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(MESSAGE.read.date);
    return Number(input);
  },
  // ...
};

export default InputView;
