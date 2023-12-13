import { ALL_CATEGORIES, ALL_MENU } from "../constants/menu.js";
import { EVENT_INFO } from "../constants/event.js";

class Discount {
  #discountPrice;
  #eventDiscount;

  constructor() {
    this.#discountPrice = 0;
    this.#eventDiscount = {};
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

  getEventDiscount() {
    return this.#eventDiscount;
  }

  #calculateDday(date) {
    const discount =
      EVENT_INFO.dDay.baseAmount + (Number(date) - 1) * EVENT_INFO.dDay.upUnit;
    this.#discountPrice += discount;
    this.#eventDiscount[EVENT_INFO.dDay.name] = discount;
  }

  #calculateSpecial() {
    const discount = EVENT_INFO.special.baseAmount;
    this.#discountPrice += discount;
    this.#eventDiscount[EVENT_INFO.special.name] = discount;
  }

  #calculateWeekday(orders) {
    let dessertCount = 0;
    orders.forEach((order) => {
      const name = order.split("-")[0];
      if (ALL_MENU[name].category === ALL_CATEGORIES.dessert) {
        dessertCount += 1;
      }
    });
    const discount = dessertCount * EVENT_INFO.weekday.baseAmount;
    this.#discountPrice += discount;
    this.#eventDiscount[EVENT_INFO.weekday.name] = discount;
  }

  #calculateWeekend(orders) {
    let mainCount = 0;
    orders.forEach((order) => {
      const name = order.split("-")[0];
      if (ALL_MENU[name].category === ALL_CATEGORIES.main) {
        mainCount += 1;
      }
    });

    const discount = mainCount * EVENT_INFO.weekend.baseAmount;
    this.#discountPrice += discount;
    this.#eventDiscount[EVENT_INFO.weekend.name] = discount;
  }

  #calculateGift() {
    const discount = EVENT_INFO.gift.giftAmount;
    this.#discountPrice += discount;
    this.#eventDiscount[EVENT_INFO.gift.name] = discount;
  }
}

export default Discount;
