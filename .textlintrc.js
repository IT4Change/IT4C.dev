module.exports = {
  rules: {
    'no-todo': true,
    'no-start-duplicated-conjunction': {
      interval : 2, // interval of sentences
    },
    'max-comma': {
      max : 4,
    },
    'no-dead-link': {
      checkRelative: true,
      baseURI: null,
      ignore: ['http://localhost*'],
      preferGET: [],
      ignoreRedirects: false,
      retry: 3,
      userAgent: 'textlint-rule-no-dead-link/1.0',
      maxRetryTime: 10,
      maxRetryAfterTime: 90
    },
    'no-empty-section': true,
    'textlint-rule-no-empty-element': true,
    'period-in-list-item': true,
  },
  filters: {
    comments: true,
  },
}