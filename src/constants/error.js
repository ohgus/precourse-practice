export const ERROR = Object.freeze({
  date: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
  order: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
});

export const REGEX = Object.freeze({
  korean: /^[가-힣]+$/,
  date: /^(0?[1-9]|[12][0-9]|3[01])$/,
  quantity: /^(1?\d|20)$/,
});
