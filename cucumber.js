export default {
  default: {
    require: [
      'features/steps/**/*.js',
      'features/hooks/**/*.js'
    ],
    format: [
      'progress',
      './node_modules/allure-cucumberjs'
    ]
  }
};
