function topK(nums, k) {
  // 여기에 코드를 작성해주세요.
  let obj = {};

  //obj 안에 nums[i]를 키값으로 넣어준다.
  for (let i=0; i < nums.length; i++) {
    (nums[i] in obj) ?
    obj[nums[i]] += 1 // 있는 값은 value +1
    : obj[nums[i]] = 1 // 없는 값은 추가.
  }

  //obj의 키값만 뽑아서 내림차순 정렬 -> 최빈값 순
  let test = Object.keys(obj).sort((a, b)=>{
    return obj[b] - obj[a];
  })

  return test.slice(0, k).map( x => parseInt(x));
}

topK([1,1,1,2,2,3], 2)

module.exports = { topK };
