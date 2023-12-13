export const ERROR = Object.freeze({
  date: {
    regex: /^(?:[1-9]|[12]\d|3[01])$/,
    range: {
      start: 1,
      end: 31,
    },
  },

  order: {
    regex: /^(?:[1-9]|1\d|20)$/,
    max: 20,
  },
});
