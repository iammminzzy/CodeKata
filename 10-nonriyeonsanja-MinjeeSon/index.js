// 강의 내용에 나오는 코드를 테스트해보세요.
// const answer = prompt("어디사세요? ");

// if (answer === "선릉") {
//   alert("가까우시네요!");
// } else if (answer === "강남") {
//   alert("가까우시네요!");
// } else if (answer === "을지로") {   
//   alert("조금 멀리 사시네요."); 
// } else {
//  alert("거긴 어디인가요?");
// }


// Assignment - 다음 함수 안에 코드를 구현하세요
function rockPaperScissors(player1, player2) {
//  예시:
  if ( (player1 === "가위" && player2 === "보" ) 
      || (player1 === "가위" && player2 === "가위") ) {
    return "player1";
  } else if ( (player1 === "바위" && player2 === "가위" )
             || (player1 === "바위" && player2 === "바위") ) {
    return "player1";
  } else if ( (player1 === "보" && player2 === "보" ) 
             || (player1 === "보" && player2 === "바위") ) {
    return "player1";
  } else if ( (player1 === "가위" && player2 === "바위" ) 
             || (player1 === "바위" && player2 === "보") 
             || (player1 === "보" && player2 === "가위") ) {
    return "player2";
  } else return "잘못내셨어요.";
}



// 아래의 코드는 절대로 수정하거나 삭제하지 마세요.
module.exports = {rockPaperScissors};