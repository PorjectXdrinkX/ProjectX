function display(email){
  var name =  
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    alert("Thank You For Subscribing ");
    return (true)
 
  }
    alert("You have entered an invalid email address!")
    return (false)
}