const getLengthOfStr = str => {
  // 아래 코드를 작성해주세요.
  let answer = [];
  let newArr = [];
  let max = 0;
  
  for(let i = 0; i < str.length; i++){
    let newStr = [];
    for(let j = i; j <= str.length; j++){
      if(!newStr.includes(str[j]) && str[j] !== undefined){
        newStr.push(str[j]);
      } else {
        newArr = newStr.join("");
        answer.push(newArr);
        newStr=[];
      }
    } 
  }
  console.log(answer);

  for(let count = 0; count < answer.length; count++ ){
    if(max < answer[count].length){
      max = answer[count].length;
    }
  }

  return max;
}

console.log(getLengthOfStr("sttrg"));

module.exports = { getLengthOfStr };
