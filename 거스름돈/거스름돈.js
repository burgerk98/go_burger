// var container = document.getElementById("container")
// var go = document.getElementById("go")
// var newM = document.getElementById("newMoney")
var fiveT, oneT, fiveH, oneH;
var money = document.getElementById("money")
var fT = document.getElementById("fT")
var oT = document.getElementById("oT")
var fH = document.getElementById("fH")
var oH = document.getElementById("oH")
var left = document.getElementById("left")


money.addEventListener("submit", function (event) {
  
  
  var newM = event.target.newMoney.value
  
  if (newM <= 100) {
    alert("100원보다 큰 금액을 입력해주세요!")
    return
  }
  else if (100 < newM) {
    event.preventDefault()
    //change함수를 바로 밖에서 선언해야하는 이유는 무엇인가요...?ㅠ
    change();
    function change() {

      fiveT = parseInt(newM / 5000);
      newM = newM % 5000;

      oneT = parseInt(newM / 1000);
      newM = newM % 1000;

      fiveH = parseInt(newM / 500);
      newM = newM % 500;

      oneH = parseInt(newM / 100);
      newM = newM % 100;

      fT.innerHTML = `${fiveT}장`
      oT.innerHTML = `${oneT}장`
      fH.innerHTML = `${fiveH}개`
      oH.innerHTML = `${oneH}개`
      left.innerHTML = `${newM}원`
    }
  }
  else {
    
    alert("금액을 입력해주세요!")
    return
  }
})

