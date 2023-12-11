import { ERROR, REGEX } from "../constants/error.js";
import { DATE, ORDER, MENU, CATEGORIES } from "../constants/eventInfo.js";

const validator = {
  validateDate(input) {
    const date = Number(input);

    if (!isFinite(date)) {
      throw new Error(ERROR.date);
    } else if (date > DATE.max || date < DATE.min) {
      throw new Error(ERROR.date);
    }
  },

  validateOrders(input) {
    let orderCount = 0;
    const orderCategories = [];
    const orderMenu = [];
    const orders = input.split(",");

    orders.forEach((order) => {
      const [name, quantity] = order.split("-");

      this.validateEachOrder(name, quantity);
      orderCount += Number(quantity);
      orderMenu.push(name);
      orderCategories.push(MENU[name].category);
    });

    if (orderMenu.length !== new Set(orderMenu).size) {
      throw new Error(ERROR.order);
    } else if (!REGEX.quantity.test(orderCount)) {
      throw new Error(ERROR.order);
    } else if (new Set(orderCategories).size === 1) {
      const category = [...new Set(orderCategories)];
      if (category[0] === CATEGORIES.drink) {
        throw new Error(ERROR.order);
      }
    }
  },

  validateEachOrder(name, quantity) {
    if (!REGEX.quantity.test(quantity)) {
      throw new Error(ERROR.order);
    } else if (!REGEX.korean.test(name)) {
      throw new Error(ERROR.order);
    } else if (!(name in MENU)) {
      throw new Error(ERROR.order);
    }
  },
};

export default validator;
