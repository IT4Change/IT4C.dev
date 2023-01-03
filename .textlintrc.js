module.exports = {
  rules: {
    'no-todo': true,
    'no-start-duplicated-conjunction': {
      interval : 2, // interval of sentences
    },
    'max-comma': {
      max : 4,
    },
  },
  filters: {
    comments: true,
  },
}