var emailPatt = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
var passPatt = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{10,}$/
function validationFun (email, pass) {
  if (!((email.match(emailPatt) && pass.match(passPatt)))) {
    console.log("Incorrect username or password!")
  }
  else {
    console.log("Login Successful!")
  }
}