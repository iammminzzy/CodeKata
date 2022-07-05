

// Assignment. 아래에 코드를 작성해주세요.

function meetAt(year, month, date) {
  let $year = year;
  let $month = month;
  let $date = date;

  if($year){
    if($month){
      if($date) {
        return ($year + "/" + $month + "/" + $date);
      } else return ($year + "년" + " " + $month + "월");
    } else return ($year + "년");
  } else return false;
}

// 아래의 코드는 절대로 수정하거나 삭제하지 마세요.
module.exports = {meetAt};