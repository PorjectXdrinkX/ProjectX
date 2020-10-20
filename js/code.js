function display(email){ 
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    alert("Thank You For Subscribing ");
    return (true)
 
  }
    alert("You have entered an invalid email address!")
    return (false)
}



function validateForm(){
  document.getElementById('log').innerHTML = '';
  var str1 = (document.getElementById('mainCaptcha').value);
  var str2 = (document.getElementById('txtInput').value);
  if (string1 != str2 || str2 == ""){
  Captcha();
  document.getElementById('log').innerHTML += '<span style="font-size:16px; padding: 25px;">Entered Invalid Captcha</span> ';
  return false;
  }
  }
  function Captcha(){
  var arro = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0');
  var i;
  for (i=0;i<6;i++){
  var a = arro[Math.floor(Math.random() * arro.length)];
  var b = arro[Math.floor(Math.random() * arro.length)];
  var c = arro[Math.floor(Math.random() * arro.length)];
  var d = arro[Math.floor(Math.random() * arro.length)];
  var e = arro[Math.floor(Math.random() * arro.length)];
  var f = arro[Math.floor(Math.random() * arro.length)];
  var g = arro[Math.floor(Math.random() * arro.length)];
  }
  var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
  document.getElementById("mainCaptcha").value = code
  var colors = ["#c71585", "#beb1dd", "#b200ff", "#faff00", "#35424a", "#FE2E9A", "#FF0080", "#2EFE2E", ];
  var rand = Math.floor(Math.random() * colors.length);
  $('#mainCaptcha').css("background-color", colors[rand]);
  }
 