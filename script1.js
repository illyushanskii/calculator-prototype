let a = ""; let b = "";
let flag = 0;
let result;
let sing;

function clock(){
let time = new Date();
let hour= time.getHours();
if(hour < 10){
  hour = "0" + hour
}
let min = time.getMinutes();
if(min < 10){
  min = "0"+ min
}
let sec = time.getSeconds();
if(sec < 10){
  sec = "0" + sec
}
let show = hour + " : " + min + " : " + sec;
document.getElementById("clock").value = show;
let T = setTimeout("clock()",1000);
}

function enterNum(n){
  let disp = document.getElementById("display");
  if(flag == 0){
    a = a + n;
    disp.value = a;
    }
  if(flag == 1){
    b = b + n;
    disp.value = b;
    }
}

function enterSing(s){
  if(a == ""){
    alert("Уведіть перший операнд а і потім натисніть кнопку із знаком арифметичної операції");
  }
  else{
    sing = s;
    document.getElementById("display").value = sing;
    flag = 1;
  }
}

function kor(){
  let l = a.length;
  l = l - 1;
  a = a.substring(0,l);
  document.getElementById("display").value = a;
}

function equal(){
  switch (sing) {
    case '+':
      result = 1 * a + 1 * b;
      document.getElementById("display").value = result;
      break;
    case '-':
      result = 1 * a - 1 * b;
      document.getElementById("display").value = result;
      break;
    case 'x':
      result = a * b;
      document.getElementById("display").value = result;
      break;
    case ':':
      if(b == 0){
        alert("На нуль ділити не можна!");
        cle();
        return;
      }
      result = a / b;
      document.getElementById("display").value = result;
      break;
    default:
      alert("Введено невірний знак операції!");
      break;
  }
  flag = 0;
  b = "";
  a = result;
}

function cle(){
  a = "";
  b = "";
  document.getElementById("display").value = "0";
  flag = 0;
}
