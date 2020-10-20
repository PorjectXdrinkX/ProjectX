function display(){ 
    alert("Thank You For Subscribing ");
}
   

  var arro = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0');

 $('#refresh').click(()=>{
  var a = arro[Math.floor(Math.random() * arro.length)];
  var b = arro[Math.floor(Math.random() * arro.length)];
  var c = arro[Math.floor(Math.random() * arro.length)];
  var d = arro[Math.floor(Math.random() * arro.length)];
  var e = arro[Math.floor(Math.random() * arro.length)];
  var f = arro[Math.floor(Math.random() * arro.length)];
  var g = arro[Math.floor(Math.random() * arro.length)];
  var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
  document.getElementById('mainCaptcha').textContent = code
  })



 


