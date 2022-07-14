function isValid(s) {
  // 여기에 코드를 입력해주세요.
  //(),{},[] 같이 바로 괄호가 닫히는 경우는 무조건 있으므로, 발견하면 제거 후 재할당.
  while(s.includes('()') || s.includes('{}') || s.includes('[]')){
    s = s.replace('()','');
    s = s.replace('{}','');
    s = s.replace('[]','');
  }
  //s의 괄호가 짝이 맞으면 삭제, 삭제... 하면 결국 빈 문자열이 된다.
  //빈 문자열이 되지 않으면 짝이 맞지 않는 것.
  return s === '' ? true : false; 
}

module.exports = { isValid };
