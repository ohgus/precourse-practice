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
}

export default Order;
