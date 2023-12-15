import { ALL_EVENT } from "../constants/event.js";
import { CATEGORY_INDEX, ALL_CATEGORY } from "../constants/menu.js";

class Event {
  #event;
  #eventDiscount;
  #allDiscount;

  constructor(category, price, date) {
    this.#event = Array.from({ length: 5 }, (value) => false);
    this.#eventDiscount = Array.from({ length: 5 }, (value) => 0);
    this.#allDiscount = 0;
    this.#checkMyEvent(category, price, date);
  }

  #checkMyEvent(category, price, date) {
    const day = new Date(ALL_EVENT.fullDate(date)).getDay();

    if (price >= ALL_EVENT.minPrice) {
      this.#checkDday(date);
      this.#checkSpecial(day, date);
      this.#checkGift(price);
      if (day === ALL_EVENT.weekend.min || day === ALL_EVENT.weekend.max) {
        this.#checkWeekend(category);
      } else {
        this.#checkWeekday(category);
      }
    } else {
      this.#event = null;
      this.#eventDiscount = null;
      this.#allDiscount = 0;
    }
  }

  #checkDday(date) {
    if (
      Number(date) >= ALL_EVENT.dday.min &&
      Number(date) <= ALL_EVENT.dday.max
    ) {
      const discount =
        ALL_EVENT.dday.basePrice + (Number(date) - 1) * ALL_EVENT.dday.upUnit;
      this.#event[ALL_EVENT.dday.index] = true;
      this.#eventDiscount[ALL_EVENT.dday.index] += discount;
      this.#allDiscount += discount;
    }
  }

  #checkWeekday(category) {
    const orderCount = category[CATEGORY_INDEX[ALL_CATEGORY.dessert]];

    if (orderCount > 0) {
      const discount = orderCount * ALL_EVENT.weekday.discount;
      this.#event[ALL_EVENT.weekday.index] = true;
      this.#allDiscount += discount;
      this.#eventDiscount[ALL_EVENT.weekday.index] += discount;
    }
  }

  #checkWeekend(category) {
    const orderCount = category[CATEGORY_INDEX[ALL_CATEGORY.main]];

    if (orderCount > 0) {
      const discount = orderCount * ALL_EVENT.weekend.discount;
      this.#event[ALL_EVENT.weekend.index] = true;
      this.#allDiscount += discount;
      this.#eventDiscount[ALL_EVENT.weekend.index] += discount;
    }
  }

  #checkSpecial(day, date) {
    if (
      day === ALL_EVENT.special.dayNum ||
      Number(date) === ALL_EVENT.special.christmas
    ) {
      const discount = ALL_EVENT.special.discount;
      this.#event[ALL_EVENT.special.index] = true;
      this.#allDiscount += discount;
      this.#eventDiscount[ALL_EVENT.special.index] += discount;
    }
  }

  #checkGift(price) {
    if (price >= ALL_EVENT.gift.minPrice) {
      const discount = ALL_EVENT.gift.discount;
      this.#event[ALL_EVENT.gift.index] = true;
      this.#allDiscount += discount;
      this.#eventDiscount[ALL_EVENT.gift.index] += discount;
    }
  }

  getEvent() {
    return this.#event;
  }

  getEventDiscount() {
    return this.#eventDiscount;
  }

  getDiscount() {
    return this.#allDiscount;
  }
}

export default Event;
