import { ALL_MENU } from "../constants/menu.js";

class Order {
  #date;
  #orderMenu;
  #price;

  constructor() {}

  setDate(date) {
    this.#date = date;
  }

  setOrderMenu(orders) {
    this.#orderMenu = orders;
  }

  setPrice(orders) {
    this.#price = this.#calculatePrice(orders);
  }

  #calculatePrice(orders) {
    let price = 0;

    orders.forEach((order) => {
      const [menu, quantity] = order.split("-");
      price += ALL_MENU[menu].price * Number(quantity);
    });

    return price;
  }
}

export default Order;
