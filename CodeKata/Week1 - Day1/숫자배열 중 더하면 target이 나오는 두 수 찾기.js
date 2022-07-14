const twoSum = (nums, target) => {
  // 아래 코드를 작성해주세요.

  //새로운 빈 배열 선언
  let result = [];

  //배열 nums 순회
  nums.forEach((num, i) => {
    //forEach((필요요소),(필요요소의 인덱스))
    //중복제거
    if (result.length !== 0) {
      //이미 정답배열이 있으면
      return;
    }
    if (nums.includes(target - num)) {
      let j = nums.indexOf(target - num);
      if (i !== j) result.push(i, j);
    }
  });
  return result;
};

// console.log(twoSum([4, 9, 11, 4], 8));

module.exports = { twoSum };
