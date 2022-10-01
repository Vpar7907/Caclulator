import { createArrNum, fixArrNum, stringToArray } from "./convertString";
import { findStep } from "./concepts";

function equal(expression) {
  return new Promise((resolve) => {
    resolve(expression);
  })
    .then(function (str) {
      return stringToArray(str);
    })
    .then(function (arr) {
      return createArrNum(arr);
    })
    .then(function (arr) {
      return fixArrNum(arr);
    })
    .then(function (exp) {
      return findStep(exp);
    });
}

export default equal;
