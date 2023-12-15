import { ALL_CATEGORY } from "./menu.js";

const EVENT_NAME = Object.freeze({
  dday: "크리스마스 디데이 할인",
  weekday: "평일 할인",
  weekend: "주말 할인",
  special: "특별 할인",
  gift: "증정 이벤트",
});

const ALL_EVENT = Object.freeze({
  minPrice: 10000,
  dday: {
    name: EVENT_NAME.dday,
    basePrice: 1000,
    upUnit: 100,
    min: 1,
    max: 25,
    index: 0,
  },
  weekday: {
    name: EVENT_NAME.weekday,
    discount: 2023,
    category: ALL_CATEGORY.dessert,
    min: 0,
    max: 3,
    index: 1,
  },
  weekend: {
    name: EVENT_NAME.weekend,
    discount: 2023,
    category: ALL_CATEGORY.main,
    min: 5,
    max: 6,
    index: 2,
  },
  special: {
    name: EVENT_NAME.special,
    discount: 1000,
    dayNum: 0,
    christmas: 25,
    index: 3,
  },
  gift: {
    name: EVENT_NAME.gift,
    discount: 25000,
    minPrice: 120000,
    index: 4,
  },
});

export { EVENT_NAME, ALL_EVENT };
