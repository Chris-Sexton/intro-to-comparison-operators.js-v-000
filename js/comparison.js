'use strict';
function testFalseLooseEqualityComparison() {
  var zero = 0;
  var one = 1;
  return zero == one
}

function testTrueLooseNonEqualityComparison() {
  var zero = 0;
  var one = 1;
  return zero != one;
}

function testTrueLooseEqualityComparison() {
  var one = 1;
  var oneAgain = "1";
  return one == oneAgain;
}

function testFalseStrictEqualityComparison() {
  var one = 1;
  var oneAgain = "1";
  return one === oneAgain;
}

function testTrueStrictEqualityComparison() {
  var one = 1;
  var oneAgain = "1";
  return one === parseInt(oneAgain);
}