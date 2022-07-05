// 강의 내용과 관련된 코드를 자유롭게 작성해주세요.
// console.log(Math.round(2.5));//3
// console.log(Math.ceil(2.49));//3
// console.log(Math.round(2));//2
// console.log(Math.floor(2.82));//2

let randomNumber = Math.random();
console.log(Math.floor(randomNumber * 10));

// Assignment
function getRandomNumber (min, max) {
  // Math.ceil(min); 최솟값
  // Math.floor(max); 최댓값
  
  //사이의 랜덤 수 구하기
  let a = Math.floor(Math.random() * (max - min + 1) + min);
  //(max-min+1) == 양 끝 값의 사이
  // * Math.random() 최솟값은 언제나 0
  // + min 최솟값이 min이 된다
  return a
}


// 아래 코드는 절대 수정하지 마세요.
module.exports = {getRandomNumber};