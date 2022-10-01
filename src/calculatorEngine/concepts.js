function calc(arrMathExp) {
  if (arrMathExp.length !== 1) {
    let idx, num1, num2, rslt;
    if (arrMathExp.indexOf("*") !== -1) {
      idx = arrMathExp.indexOf("*");
      num1 = arrMathExp[idx - 1];
      num2 = arrMathExp[idx + 1];
      rslt = num1 * num2;
      arrMathExp.splice(idx - 1, 3, rslt);
      return calc(arrMathExp);
    } else if (arrMathExp.indexOf("/") !== -1) {
      idx = arrMathExp.indexOf("/");
      num1 = arrMathExp[idx - 1];
      num2 = arrMathExp[idx + 1];
      rslt = num1 / num2;
      arrMathExp.splice(idx - 1, 3, rslt);
      return calc(arrMathExp);
    }
    if (arrMathExp.indexOf("+") !== -1) {
      idx = arrMathExp.indexOf("+");
      num1 = arrMathExp[idx - 1];
      num2 = arrMathExp[idx + 1];
      rslt = num1 + num2;
      arrMathExp.splice(idx - 1, 3, rslt);
      return calc(arrMathExp);
    } else if (arrMathExp.indexOf("-") !== -1) {
      idx = arrMathExp.indexOf("-");
      num1 = arrMathExp[idx - 1];
      num2 = arrMathExp[idx + 1];
      rslt = num1 - num2;
      arrMathExp.splice(idx - 1, 3, rslt);
      return calc(arrMathExp);
    }
  } else {
    return arrMathExp[0];
  }
}

export function findStep(expArr) {
  let idxOpen, idxClose, tmpArr, res;
  if (expArr.indexOf("(") !== -1) {
    if (expArr.indexOf(")") !== -1) {
      idxClose = expArr.indexOf(")");
      idxOpen = expArr.lastIndexOf("(", idxClose) + 1;
      tmpArr = expArr;
      tmpArr = expArr.slice(idxOpen, idxClose);
      res = calc(tmpArr);
      expArr.splice(idxOpen - 1, 5, res);
      return findStep(expArr);
    }
  } else {
    return calc(expArr);
  }
}
