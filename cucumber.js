export default {
  default: {
    require: [
      'features/steps/**/*.js',
      'features/steps/hooks.js'
    ],
    format: [
      'progress',
      './node_modules/allure-cucumberjs'
    ]
  }
};
