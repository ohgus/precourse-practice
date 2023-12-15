import { ALL_CATEGORY, ALL_MENU, CATEGORY_INDEX } from "../constants/menu.js";
import { ERROR } from "../constants/error.js";
import { ORDER_OPTION } from "../constants/order.js";

class Order {
  #orders;
  #category;
  #price;

  constructor(input) {
    this.#category = Array.from({ length: 4 }, (value) => 0);
    this.#validate(input);
  }

  #validate(input) {
    const orders = input.split(ORDER_OPTION.orderSpliter);
    this.#validateEmpty(orders);
    const menus = [];
    let totalQuantity = 0;

    orders.forEach((order) => {
      const [menu, quantity] = order.split(ORDER_OPTION.menuSpliter);
      this.#validateMenu(menu);
      this.#validateQuantity(quantity);

      menus.push(menu);
      totalQuantity += Number(quantity);
      this.#countCategory(menu, quantity);
    });

    this.#validateDuplicate(menus);
    this.#validatetotalQuantity(totalQuantity);
    this.#validateCategory(this.#category, totalQuantity);
  }

  #validateEmpty(orders) {
    if (orders.includes(ERROR.emptySpace)) {
      throw new Error(ERROR.message.order);
    }
  }

  #validateMenu(menu) {
    if (!(menu in ALL_MENU)) {
      throw new Error(ERROR.message.order);
    }
  }

  #validateQuantity(quantity) {
    if (!ERROR.quantityRegex.test(quantity)) {
      throw new Error(ERROR.message.order);
    }
  }

  #validateDuplicate(menus) {
    if (menus.length !== new Set(menus).size) {
      throw new Error(ERROR.message.order);
    }
  }

  #validatetotalQuantity(totalQuantity) {
    if (totalQuantity > ORDER_OPTION.max) {
      throw new Error(ERROR.message.order);
    }
  }

  #countCategory(menu, quantity) {
    const category = ALL_MENU[menu].category;
    this.#category[CATEGORY_INDEX[category]] += Number(quantity);
  }

  #validateCategory(categoryCount, totalQuantity) {
    if (totalQuantity === categoryCount[CATEGORY_INDEX[ALL_CATEGORY.drink]]) {
      throw new Error(ERROR.message.order);
    }
  }
}

export default Order;

new Order("제로콜라-2,레드와인-2,샴페인-1");
