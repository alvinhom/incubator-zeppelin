require '../styles/notebook.css'
require '../styles/custom-font.css'

deps = [
  require 'angular-ui-router'
  require('data/client').name
  require('data/address').name
  require('ui/binaryToggle').name
]

module.exports = angular.module 'bench.page.client', deps

.directive 'notebook', ->
  restrict: 'E'
  scope: {}
  bindToController: true
  template: require '../views/notebooks.html'
  controller: require './controllers/notebook.js'
  controllerAs: 'vm'
