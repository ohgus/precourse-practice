export const DATE = Object.freeze({
  min: 1,
  max: 31,
  dDay: 25,
});

export const ORDER = Object.freeze({
  min: 1,
  max: 20,
});

export const CATEGORIES = Object.freeze({
  appetizer: "에피타이저",
  main: "메인",
  dessert: "디저트",
  drink: "음료",
});

export const MENU = Object.freeze({
  양송이수프: {
    category: CATEGORIES.appetizer,
    price: 6000,
  },
  타파스: {
    category: CATEGORIES.appetizer,
    price: 5500,
  },
  시저샐러드: {
    category: CATEGORIES.appetizer,
    price: 8000,
  },
  티본스테이크: {
    category: CATEGORIES.main,
    price: 55000,
  },
  바비큐립: {
    category: CATEGORIES.main,
    price: 54000,
  },
  해산물파스타: {
    category: CATEGORIES.main,
    price: 35000,
  },
  크리스마스파스타: {
    category: CATEGORIES.main,
    price: 25000,
  },
  초코케이크: {
    category: CATEGORIES.dessert,
    price: 15000,
  },
  아이스크림: {
    category: CATEGORIES.dessert,
    price: 5000,
  },
  제로콜라: {
    category: CATEGORIES.drink,
    price: 3000,
  },
  레드와인: {
    category: CATEGORIES.drink,
    price: 60000,
  },
  샴페인: {
    category: CATEGORIES.drink,
    price: 25000,
  },
});
