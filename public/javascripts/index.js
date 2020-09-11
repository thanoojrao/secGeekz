
var state=false;
function toogle(){
    if(state){
        document.getElementById("psw").setAttribute('type',"password");
        document.getElementById("eye").classList.toggle('active');
        state=false;
    }
    else{
        document.getElementById("psw").setAttribute('type',"text");
        state=true;
        document.getElementById("eye").classList.toggle('active');
    }
}
var psw = document.getElementById("psw");
var conform_psw=document.getElementById("conform_psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var userName = document.getElementById("userName");
var name_length=document.getElementById('name_length');
var user_mail=document.getElementById("userEmail");
var email_structure=document.getElementById("email_error");


// When the user clicks on the password field, show the message box
psw.onfocus = function() {
  document.getElementById("message").style.display = "block";
}


function checkSignup(){
  var valid =document.querySelectorAll("p.valid");
  var valid_num = valid.length;
  if(valid_num==7){
    document.getElementById("message").style.display='none';
      document.getElementById("signup_btn").disabled=false;
     
  }
  else{
    document.getElementById("signup_btn").disabled=true;
      document.getElementById("message").display='block';
  }
}


// When the user starts to type something inside the password field
psw.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(psw.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(psw.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(psw.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(psw.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
  //match password
  if(psw.value==conform_psw.value){
    match_psw.classList.remove("invalid");
    match_psw.classList.add("valid");
  }
  else {
    match_psw.classList.remove("valid");
    match_psw.classList.add("invalid");
  }

  checkSignup();
}
conform_psw.onkeyup = function(){
  if(psw.value==conform_psw.value){
    match_psw.classList.remove("invalid");
    match_psw.classList.add("valid");
  }
  else {
    match_psw.classList.remove("valid");
    match_psw.classList.add("invalid");
  }
  checkSignup();
}
//when user starts to type some thing inside the userName field
userName.onkeyup = function(){
  if(userName.value.length==0){
    name_length.classList.remove("valid");
    name_length.classList.add("invalid");
  }
  else {
    name_length.classList.remove("invalid");
    name_length.classList.add("valid");
}
checkSignup();
}
user_mail.onkeyup = function(){
  let email_cases=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/g;
  if(user_mail.value.match(email_cases)) {  
    email_structure.classList.remove("invalid");
    email_structure.classList.add("valid");
  } else {
    email_structure.classList.remove("valid");
    email_structure.classList.add("invalid");
  }  
  checkSignup();
}
