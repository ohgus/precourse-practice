import INPUT_MESSAGE from "../constants/input.js";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.date);
    return input;
  },
  // ...
};

export default InputView;
