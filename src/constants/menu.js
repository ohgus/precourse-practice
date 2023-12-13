export const ALL_CATEGORIES = Object.freeze({
  appetizer: "에피타이저",
  main: "메인",
  dessert: "디저트",
  drink: "음료",
});

export const ALL_MENU = Object.freeze({
  양송이수프: {
    price: 6000,
    category: ALL_CATEGORIES.appetizer,
  },
  타파스: {
    price: 5500,
    category: ALL_CATEGORIES.appetizer,
  },
  시저샐러드: {
    price: 8000,
    category: ALL_CATEGORIES.appetizer,
  },
  티본스테이크: {
    price: 55000,
    category: ALL_CATEGORIES.main,
  },
  바비큐립: {
    price: 54000,
    category: ALL_CATEGORIES.main,
  },
  해산물파스타: {
    price: 35000,
    category: ALL_CATEGORIES.main,
  },
  크리스마스파스타: {
    price: 25000,
    category: ALL_CATEGORIES.main,
  },
  초코케이크: {
    price: 15000,
    category: ALL_CATEGORIES.dessert,
  },
  아이스크림: {
    price: 5000,
    category: ALL_CATEGORIES.dessert,
  },
  제로콜라: {
    price: 3000,
    category: ALL_CATEGORIES.drink,
  },
  레드와인: {
    price: 60000,
    category: ALL_CATEGORIES.drink,
  },
  샴페인: {
    price: 25000,
    category: ALL_CATEGORIES.drink,
  },
});
