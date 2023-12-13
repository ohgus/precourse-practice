export const EVENT_INFO = Object.freeze({
  start: 1,
  end: 31,
  dDay: {
    name: "크리스마스 디데이 할인",
    baseAmount: 1000,
    upUnit: 100,
    start: 1,
    end: 25,
  },
  weekday: {
    name: "평일 할인",
    baseAmount: 2023,
    start: 0,
    end: 4,
    category: "디저트",
  },
  weekend: {
    name: "주말 할인",
    baseAmount: 2023,
    start: 5,
    end: 6,
    category: "메인",
  },
  special: {
    name: "특별 할인",
    sunday: 0,
    christmas: 25,
    baseAmount: 1000,
  },
  gift: {
    name: "증정 이벤트",
    satisfiedAmount: 120000,
    giftAmount: 25000,
    giftName: "샴페인",
  },
});
