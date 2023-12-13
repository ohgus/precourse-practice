import { EVENT_INFO } from "./constants/event.js";
import { MENU, CATEGORIES } from "./constants/orderInfo.js";

class Event {
  getBenefits(date, orderInput, price) {
    const benefits = [];
    const orders = orderInput.split(",");
    console.log(orders);

    benefits.push(this.#checkDdayEvent(date));
    benefits.push(this.#checkSpecialdayEvent(date));
    benefits.push(this.#checkGiftEvent(price));
    orders.forEach((order) => {
      const [name, quantity] = order.split("-");

      if (this.#checkWeekWeekendEvent(date, name)) {
        benefits.push(EVENT_INFO);
      }
    });
    return [...new Set(benefits)];
  }

  #checkDdayEvent(date) {
    if (date >= EVENT_INFO.dDay.start && date <= EVENT_INFO.dDay.end) {
      return true;
    }
    return false;
  }

  #checkWeekWeekendEvent(date, name) {
    const day = new Date(`${EVENT_INFO.eventMonth}${date}`).getDay();

    if (day >= EVENT_INFO.weekday.start && day <= EVENT_INFO.weekday.end) {
      if (MENU[name].category === CATEGORIES.dessert) {
        return true;
      }
    } else if (
      day === EVENT_INFO.weekend.start ||
      day === EVENT_INFO.weekend.end
    ) {
      if (MENU[name].category === CATEGORIES.main) {
        return true;
      }
    }
    return false;
  }

  #checkSpecialdayEvent(date) {
    const day = new Date(`${EVENT_INFO.eventMonth}${date}`).getDay();

    if (
      EVENT_INFO.special.day.includes(day) ||
      EVENT_INFO.special.day.includes(date)
    ) {
      return true;
    }
    return false;
  }

  #checkGiftEvent(price) {
    if (price >= EVENT_INFO.gift.priceMet) {
      return EVENT_INFO.gift.name;
    }
  }
}

export default Event;
