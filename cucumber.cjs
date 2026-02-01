module.exports = {
  default: {
    require: [
      'features/steps/hooks.js',
      'features/steps/**/*.js'
    ],
    paths: [
      'features/**/*.feature'
    ],
    format: [
      'progress'
    ]
  }
};
