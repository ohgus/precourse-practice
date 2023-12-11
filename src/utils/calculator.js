import { MENU } from "../constants/eventInfo.js";

const calculator = {
  calculateTotalPrice(input) {
    let totalPrice = 0;
    const orders = input.split(",");

    orders.forEach((order) => {
      const [name, quantity] = order.split("-");
      totalPrice += MENU[name].price * quantity;
    });

    return totalPrice;
  },
};

export default calculator;
