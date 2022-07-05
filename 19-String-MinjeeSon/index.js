// 강의와 관련된 코드를 작성해주세요.
// let lastName = 'Yeri Kim';
// let upperLastName = lastName.toUpperCase();
// let lowerLastName = lastName.toLowerCase();

// console.log(lastName); // Yeri Kim
// console.log(upperLastName); // YERI KIM
// console.log(lowerLastName); // yeri kim

// let name = prompt("성함을 입력해주세요");

// if (name.length === 2) {
//   alert("외자이시군요! 이름이 이쁘네요.");
// } else if (name.length === 1) {
//   alert("제대로 입력하셨나요?");
// } else if (name.length === 3) {
//   alert("멋진 이름입니다.");
// }

// let info = "JavaScript는 프로래밍 언어이다.";
// let firstChar = info.indexOf("프로래밍"); 

// if (firstChar !== -1) { 
//   info = info.slice(0, firstChar) + "프로그래밍" + info.slice(firstChar+4, info.length); 
// }

// console.log(info);

// Assignment - 다음 함수 안에 코드를 구현하세요
function sliceCityFromAddress(address) {
  let CharSi = address.indexOf("시");//"시"의 위치 index
  let CharDo = address.indexOf("도");//"도"의 위치 index

  let result;
  if(CharSi !== -1){//indexOf() => 해당값이 없으면 -1을 리턴
    //즉, 주소에 "시"가 없지않으면 == "시"가 있다면 실행
    if(CharDo === -1){//주소에 "도"가 없다면 (ex.서울특별시, 광역시 등) 실행
      result = address.slice(CharSi + 2);//"시" 2칸 뒤부터 마지막까지 자름
    } else {//주소에 "도"가 있다면 실행
    result = address.slice(0, CharDo+2) + address.slice(CharSi+2);//처음부터 "도"까지 + "시" 2칸 뒤부터 마지막까지 잘라 합침
//2칸 뒤부터 잘라 준 이유 : 공백처리
    }
  }
  return result;
}

module.exports = {sliceCityFromAddress}