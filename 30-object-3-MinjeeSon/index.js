// 객체에 키/값 할당하기
// const information = {
//   name: '김개발'
// }
// const verb = 'makes'
// const project = 'facebook'

// information[verb] = project

// console.log(information)

// 객체 순회하기
// const obj = {
//   name: 'melon',
//   weight: 4350,
//   price: 16500,
//   isFresh: true
// }
// for (let key in obj) {
//   const value = obj[key]

//   console.log(key)
//   console.log(value)
// }

// console.log(Object.keys(obj))//key의 배열
// console.log(Object.values(obj))//value의 배열
// console.log(Object.entries(obj))//[key, value]의 배열

// Assignment - 다음 함수 안에 코드를 구현하세요
const scores = {
// key1 : value1(=scores[key1])
  '생활속의회계': 'C',
  '논리적글쓰기': 'B',
  '독일문화의이해': 'B+',
  '기초수학': 'D+',
  '영어회화': 'C+',
  '인지발달심리학': 'A+',
}

const requiredClasses = ['영어회화', '기초수학', '공학수학', '컴퓨터과학개론'];

const getExamResult = (scores, requiredClasses) => {

  //1. scores -> number 변환을 위해 대응하는 객체 생성
  const turnToNum = {
  // key2 : value2
  // value1 : turnToNum[key2]
  // scores[key1] : turnToNum[scores[key1]]
    'A+': 4.5,
    'A' : 4,
    'B+' : 3.5,
    'B' : 3,
    'C+' : 2.5,
    'C' : 2,
    'D+' : 1.5,
    'D' : 1,
    'F' : 0
  }

  // 2. scores 객체 순회 -> turnToNum 객체에 대응
  
  //scores 객체 순회(for in문 - 객체만 사용 가능. 배열x)
  for(let key in scores) {
    //turnToNum의 value를 scores의 value에 수정삽입
    scores[key] = turnToNum[scores[key]];// line:49 참고
  }
  
  // 3. 배열로 주어진 새로운 키값을 scores에 추가. value = 0.

  //requiredClasses 배열 순회
  for(i = 0; i < requiredClasses.length; i++){
    //requiredClasses 배열의 요소가 score에 포함되지 않으면
    if(!Object.keys(scores).includes(requiredClasses[i])){
      //scores객체에 추가.(객체 추가 문법 : obj[key] = value; )
      scores[requiredClasses[i]] = 0;
    }
  } return scores;
 } 

console.log(getExamResult(scores, requiredClasses));

module.exports = { getExamResult }