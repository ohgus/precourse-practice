export const MESSAGE = Object.freeze({
  read: {
    date: "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n",
    order:
      "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n",
  },

  print: {
    hello: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
    orderMenu: "\n<주문 메뉴>",
    preview: (date) =>
      `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
    beforeDiscount: "\n<할인 전 총주문 금액>",
    giftTitle: "\n<증정 메뉴>",
    giftItem: {
      none: "없음",
      have: "샴페인 1개",
    },
    myEvent: {
      title: "\n<혜택 내역>",
      minus: "-",
      none: "없음",
    },
  },

  error: {
    date: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
    order: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
  },
});
