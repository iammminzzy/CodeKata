function getMaxArea(height) {
  let area = 0;
  let arr = [];
  
  for (let i in height) {
    for (let j in height) {
      //(조건문) ? true : false
      height[i]<height[j] ? area = (j-i)*height[i] : area = (j-i)*height[j];
      //if(조건문) ? (실행문) : null 일 때, (조건문) && (실행문)
      area > 0 && arr.push(area);
    }
  }
  //배열의 요소 중 최대값 구하기
  return Math.max(...arr);
}

// 아래 코드는 절대 수정하지 마세요.
module.exports = { getMaxArea };
