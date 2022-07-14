function romanToNum(s) {
  // 여기에 코드를 작성해주세요.
  const roman = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
  }

  // let arr = s.split("");
  let result = 0;

  for(let i = 0; i < s.length; i++){
      if(roman[s[i]] < roman[s[i+1]]){
        result -= roman[s[i]];
      } else {
        result += roman[s[i]];
      }
  }
  return result;
}


module.exports = { romanToNum };
