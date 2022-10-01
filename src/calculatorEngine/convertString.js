export function stringToArray(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  return arr;
}

export function createArrNum(arr) {
  let arrMathExp = [];
  let num = "";
  for (let i = 0; i < arr.length; i++) {
    if (
      (typeof +arr[i] === "number" && !Number.isNaN(+arr[i])) ||
      arr[i] === "." ||
      arr[0] === "-"
    ) {
      num += arr[i];
    }
    if ((Number.isNaN(+arr[i]) && arr[i] !== ".") || i === arr.length - 1) {
      arrMathExp.push(+num);
      if (typeof +arr[i] === "number" && Number.isNaN(+arr[i])) {
        arrMathExp.push(arr[i]);
      }
      num = "";

      if (arr[i + 1] === "-") {
        i = i + 1;
        num = "-";
      }
    }
  }

  return arrMathExp;
}

export function fixArrNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    let idx;
    if (arr[i] === "(") {
      idx = i - 1;
      arr.splice(idx, 1);
    } else if (arr[i] === ")") {
      idx = i + 1;
      arr.splice(idx, 1);
    }
  }
  return arr;
}
