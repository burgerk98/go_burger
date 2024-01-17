//전체적으로 이름을 신경써서 지어주는것이 좋다.

var fiveT, oneT, fiveH, oneH;
//머니보다는 머니 form으로 적어주기.
var form = document.getElementById("form")
var fT = document.getElementById("fT")
var oT = document.getElementById("oT")
var fH = document.getElementById("fH")
var oH = document.getElementById("oH")
var left = document.getElementById("left")



form.addEventListener("submit", function (event) {
  
  //문자로 받아오기때문에 숫자로 받아오기.(parseInt)
  var newM = parseInt(event.target.newMoney.value)
  
  //밑의 if문의 조건은 1000이상 100미만의 값이 딱 정해지므로
  //문자를 받았을 때 띄울 alert문은 따로 if문을 만드는것이 좋다.
  if(!newM || isNaN(newM)){
    
    alert("금액을 입력해주세요!")
    return
  }

  if (newM <= 100) {
    alert("100원보다 큰 금액을 입력해주세요!")
    return
  }
  //if와 반대되는 상황이기때문에 else로 표현해주는것이 좋음
  else{
    event.preventDefault()
    
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
  
  
})

