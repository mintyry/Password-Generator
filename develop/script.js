// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatepassword() {
 
  var lowercase = confirm("Do you want lowercase letters in your password?")//true or false
 
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
