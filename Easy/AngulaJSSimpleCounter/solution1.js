import angular from "angular";

angular.module("myApp", []).controller("myController", function() {

  // change below to get counter working
  let vm = this;
  vm.title = "no title";
  vm.buttonClickCount = 0;
  vm.increaseCount = () => this.buttonClickCount++;

});