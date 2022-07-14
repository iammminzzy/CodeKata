function moreThanHalf(nums) {
  // 여기에 코드를 작성해주세요.

  for(let i = 0; i < nums.length; i++){
    let sameNums = nums.filter(x => x === nums[i]);
    console.log(sameNums);
    
    if(sameNums.length > nums.length / 2){
      return sameNums[i];
    }
  }
}

moreThanHalf([2,2,5,6,2,3,7,8,3,3,1,1,1,2,2]);

module.exports = { moreThanHalf };
