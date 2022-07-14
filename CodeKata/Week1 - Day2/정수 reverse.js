const reverse1 = (x) => {
  // 여기에 코드를 작성해주세요.
  let reversed = x.toString().split("").reverse().join("");
  let resultNum = parseInt(reversed);

  if (x < 0) {
    resultNum *= -1;
  }
  return resultNum;
};

const reverse2 = (x) => {
  // 여기에 코드를 작성해주세요.
  let toArr = x.toString().split("");
  let reversed = [];

  for (let i = toArr.length - 1; i >= 0; i--) {
    reversed.push(toArr[i]);
  }

  let result = reversed.join("");
  let resultNum = parseInt(result);

  if (x < 0) {
    resultNum *= -1;
  }
  return resultNum;
};

console.log(reverse1(1234));
console.log(reverse2(1234));
