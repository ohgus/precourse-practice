const ALL_CATEGORY = Object.freeze({
  appetizer: "에피타이저",
  main: "메인",
  dessert: "디저트",
  drink: "음료",
});

const ALL_MENU = Object.freeze({
  양송이수프: {
    category: ALL_CATEGORY.appetizer,
    price: 6000,
  },
  타파스: {
    category: ALL_CATEGORY.appetizer,
    price: 5500,
  },
  시저샐러드: {
    category: ALL_CATEGORY.appetizer,
    price: 8000,
  },
  티본스테이크: {
    category: ALL_CATEGORY.main,
    price: 55000,
  },
  바비큐립: {
    category: ALL_CATEGORY.main,
    price: 54000,
  },
  해산물파스타: {
    category: ALL_CATEGORY.main,
    price: 35000,
  },
  크리스마스파스타: {
    category: ALL_CATEGORY.main,
    price: 25000,
  },
  초코케이크: {
    category: ALL_CATEGORY.dessert,
    price: 15000,
  },
  아이스크림: {
    category: ALL_CATEGORY.dessert,
    price: 5000,
  },
  제로콜라: {
    category: ALL_CATEGORY.drink,
    price: 3000,
  },
  레드와인: {
    category: ALL_CATEGORY.drink,
    price: 60000,
  },
  샴페인: {
    category: ALL_CATEGORY.drink,
    price: 25000,
  },
});

const CATEGORY_INDEX = Object.freeze({
  에피타이저: 0,
  메인: 1,
  디저트: 2,
  음료: 3,
});

export { ALL_MENU, ALL_CATEGORY, CATEGORY_INDEX };
