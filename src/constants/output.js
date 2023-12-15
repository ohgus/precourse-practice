export const OUTPUT_MESSAGE = Object.freeze({
  start: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  menuTitle: "\n<주문 메뉴>",
  menuUnit: "개",
  priceUnit: "원",
  preview: (date) =>
    `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  beforeDiscount: "\n<할인 전 총주문 금액>",
  giftTitle: "\n<증정 메뉴>",
  gift: "샴페인 1개",
  noEvent: "없음",
  myEventTitle: "\n<혜택 내역>",
  myEvent: (discount, name) => `${name}: -${discount.toLocaleString()}원`,
});
