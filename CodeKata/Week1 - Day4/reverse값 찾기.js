const sameReverse = num => {
  let reverse = num.toString().split("").reverse().join("");
  let answer = (reverse == num) ? true : false;

  return answer;
}

console.log(sameReverse(-1221));

module.exports = { sameReverse };
