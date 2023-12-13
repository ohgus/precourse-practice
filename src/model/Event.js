import { EVENT_INFO } from "../constants/event.js";
import { ALL_MENU, ALL_CATEGORIES } from "../constants/menu.js";

class Event {
  #event;

  constructor() {
    this.#event = [];
  }

  setEvent(price, date, orders) {
    if (price >= 1000) {
      if (this.#checkDDay(date)) {
        this.#event.push(EVENT_INFO.dDay.name);
      }
      if (this.#checkWeekday(date, orders)) {
        this.#event.push(EVENT_INFO.weekday.name);
      }
      if (this.#checkWeekend(date, orders)) {
        this.#event.push(EVENT_INFO.weekend.name);
      }
      if (this.#checkSpecial(date)) {
        this.#event.push(EVENT_INFO.special.name);
      }
      if (this.#checkGift(price)) {
        this.#event.push(EVENT_INFO.gift.name);
      }
    } else {
      this.#event = [];
    }
  }

  getEvent() {
    return this.#event;
  }

  #checkDDay(date) {
    if (date >= EVENT_INFO.dDay.start && date <= EVENT_INFO.dDay.end) {
      return true;
    }
    return false;
  }

  #checkWeekday(date, orders) {
    const day = new Date(`2023.12.${date}`).getDay();

    if (day >= EVENT_INFO.weekday.start && day <= EVENT_INFO.weekday.end) {
      const categoryList = this.#makeCategoryList(orders);

      if (categoryList.includes(ALL_CATEGORIES.dessert)) {
        return true;
      }
    }
    return false;
  }

  #checkWeekend(date, orders) {
    const day = new Date(`2023.12.${date}`).getDay();

    if (day === EVENT_INFO.weekend.start || day === EVENT_INFO.weekend.end) {
      const categoryList = this.#makeCategoryList(orders);

      if (categoryList.includes(ALL_CATEGORIES.main)) {
        return true;
      }
    }
    return false;
  }

  #checkSpecial(date) {
    const day = new Date(`2023.12.${date}`).getDay();
    if (day === EVENT_INFO.special.sunday) {
      return true;
    } else if (Number(date) === EVENT_INFO.special.christmas) {
      return true;
    }
    return false;
  }

  #checkGift(price) {
    if (price >= EVENT_INFO.gift.satisfiedAmount) {
      return true;
    }
    return false;
  }

  #makeCategoryList(orders) {
    const arr = [];
    orders.forEach((order) => {
      const name = order.split("-")[0];
      arr.push(ALL_MENU[name].category);
    });
    return arr;
  }
}

export default Event;
