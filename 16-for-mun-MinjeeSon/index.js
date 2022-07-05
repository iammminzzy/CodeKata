// Assignment - 다음 함수 안에 코드를 구현하세요
function findSmallestElement(arr) {
  // your code here
  if(arr.length !== 0){//arr가 비어있지 않으면
    let min = arr[0];//최솟값 초기화 (첫번째값으로 설정)
    //arr의 첫번째 값과 그 다음 값들을 차례로 비교하여 작은 값을 min에 저장
    for(let i = 1; i < arr.length; i++){
      if(min >= arr[i]){
        min = arr[i];
      }
    } return min;
  } else return 0;//arr가 비어있으면 0
}
  

// let array = [];
// console.log(findSmallestElement(array));


// 아래의 코드는 절대로 수정하거나 삭제하지 마세요.
module.exports = { findSmallestElement};