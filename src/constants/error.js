export const ERROR = Object.freeze({
  dateRegex: /^(?:[1-9]|1\d|2[0-9]|30|31)$/,
  quantityRegex: /^(?:[1-9]|1\d|20)$/,
  emptySpace: "",
  message: {
    date: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
    order: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
  },
});
