class Order {
  #date;
  #orderMenu;
  #price;

  constructor() {}

  setDate(date) {
    this.#date = date;
  }
}

export default Order;
