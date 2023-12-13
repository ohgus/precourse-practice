export const EVENT_INFO = Object.freeze({
  eventMonth: "2023.12.",
  dDay: {
    name: "크리스마스 디데이 할인",
    start: 1,
    end: 25,
    discountPrice: 1000,
    priceUnit: 100,
  },
  weekday: {
    name: "평일 할인",
    discountPrice: 2023,
    start: 0,
    end: 4,
  },
  weekend: {
    name: "주말 할인",
    discountPrice: 2023,
    start: 5,
    end: 6,
  },
  special: {
    name: "특별 할인",
    discountPrice: 1000,
    day: [0, 25],
  },
  gift: {
    name: "증정 이벤트",
    item: "샴페인",
    priceMet: 120000,
    discountPrice: 25000,
  },
  badge: {
    point: {
      one: 5000,
      two: 10000,
      three: 20000,
    },
    star: "별",
    tree: "트리",
    santa: "산타",
  },
});
