import { ALL_CATEGORIES, ALL_MENU } from "../constants/menu.js";
import { EVENT_INFO } from "../constants/event.js";

class Discount {
  #discountPrice;

  constructor() {
    this.#discountPrice = 0;
  }

  setDiscountPrice(event, date, orders) {
    if (event.includes(EVENT_INFO.dDay.name)) this.#calculateDday(date);
    if (event.includes(EVENT_INFO.special.name)) this.#calculateSpecial();
    if (event.includes(EVENT_INFO.weekday.name)) this.#calculateWeekday(orders);
    else if (event.includes(EVENT_INFO.weekend.name))
      this.#calculateWeekend(orders);
    if (event.includes(EVENT_INFO.gift.name)) this.#calculateGift();
  }

  getDiscount() {
    return this.#discountPrice;
  }

  #calculateDday(date) {
    this.#discountPrice +=
      EVENT_INFO.dDay.baseAmount + (Number(date) - 1) * EVENT_INFO.dDay.upUnit;
  }

  #calculateSpecial() {
    this.#discountPrice += EVENT_INFO.special.baseAmount;
  }

  #calculateWeekday(orders) {
    let dessertCount = 0;
    orders.forEach((order) => {
      const name = order.split("-")[0];
      if (ALL_MENU[name].category === ALL_CATEGORIES.dessert) {
        dessertCount += 1;
      }
    });

    this.#discountPrice += dessertCount * EVENT_INFO.weekday.baseAmount;
  }

  #calculateWeekend(orders) {
    let mainCount = 0;
    orders.forEach((order) => {
      const name = order.split("-")[0];
      if (ALL_MENU[name].category === ALL_CATEGORIES.main) {
        mainCount += 1;
      }
    });

    this.#discountPrice += mainCount * EVENT_INFO.weekend.baseAmount;
  }

  #calculateGift() {
    this.#discountPrice += EVENT_INFO.gift.giftAmount;
  }
}

export default Discount;
