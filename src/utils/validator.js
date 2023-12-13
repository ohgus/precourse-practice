import { MESSAGE } from "../constants/message.js";
import { ERROR } from "../constants/error.js";
import { ALL_MENU, ALL_CATEGORIES } from "../constants/menu.js";

class Validator {
  validateDate(date) {
    if (!ERROR.date.regex.test(date)) {
      throw new Error(MESSAGE.error.date);
    }
  }

  validateOrder(orders) {
    if (this.#chkeckEmpty(orders)) {
      throw new Error(MESSAGE.error.order);
    }
    const orderList = [];
    const categoryList = [];
    let orderCount = 0;

    orders.forEach((order) => {
      const [menu, quantity] = order.split("-");

      this.#validateMenu(menu);
      this.#validateQuantity(quantity);

      orderList.push(menu);
      categoryList.push(this.#findCategory(menu));
      orderCount += Number(quantity);
    });
    this.#validateOrderCount(orderCount);
    this.#validateOrderList(orderList);
    this.#validateCategoryList(categoryList);
  }

  #findCategory(menu) {
    return ALL_MENU[menu].category;
  }

  #chkeckEmpty(orders) {
    if (orders.includes(" ")) {
      return true;
    }
    return false;
  }

  #validateMenu(menu) {
    const allMenuKey = Object.keys(ALL_MENU);

    if (!allMenuKey.includes(menu)) {
      throw new Error(MESSAGE.error.order);
    }
  }

  #validateQuantity(quantity) {
    if (!ERROR.order.regex.test(quantity)) {
      throw new Error(MESSAGE.error.order);
    }
  }

  #validateOrderCount(orderCount) {
    if (orderCount > ERROR.order.max) {
      throw new Error(MESSAGE.error.order);
    }
  }

  #validateOrderList(orderList) {
    if (orderList.length !== new Set(orderList).size) {
      throw new Error(MESSAGE.error.order);
    }
  }

  #validateCategoryList(categoryList) {
    if (
      categoryList.filter((category) => category === ALL_CATEGORIES.drink)
        .length === categoryList.length
    ) {
      throw new Error(MESSAGE.error.order);
    }
  }
}

export default Validator;
