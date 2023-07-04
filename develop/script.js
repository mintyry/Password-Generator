// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppset = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z'];
var lowset = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numset= ['0', "1", '2', '3', '4', '5', '6', '7', '8', '9']
var spset = ['!', '?', '$', '#', '&', '*', '@', '#', '(', ')']

var password=""

//var char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//var passwordLength = 12;


function generatePassword() {
  var uppercase = confirm("Do you want uppercase letters in your password?");
  var lowercase = confirm("Do you want lowercase letters in your password?")//true or false
  var numbers = confirm ("Do you want numbers in your password?")
  var spchar = confirm ("Do you want special characters in your password?")
  var passwordLength = prompt("Please enter a value between 8 and 128 for how many characters you would like your password to contain.")

  console.log (uppercase)

  if (uppercase&&lowercase&&numbers&&spchar) {
    var allset = [...uppset, ...lowset, ...numset, ...spset]
    console.log(allset)
   

  }

  for (let i=0; i < passwordLength; i++) {
    password += allset[Math.floor(Math.random() * allset.length)];
      
    console.log(password)
    }

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
z
