// Assignment Code
//leaving console.log codes in, because i found it helpful to test while writing up this code

var generateBtn = document.querySelector("#generate");

var uppset = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z'];
var lowset = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numset= ['0', "1", '2', '3', '4', '5', '6', '7', '8', '9']
var spset = ['!', '?', '$', '#', '&', '*', '@', '#', '(', ')']

var password=""

var allset=[]
console.log(allset.concat(uppset))


function generatePassword() {
  var uppercase = confirm("Do you want uppercase letters in your password?");
  var lowercase = confirm("Do you want lowercase letters in your password?")
  var numbers = confirm ("Do you want numbers in your password?")
  var spchar = confirm ("Do you want special characters in your password?")
  if (uppercase + lowercase + numbers + spchar === 0) {
    alert("Do you even want to make a password? \n Please select at least one criteria for your password.");
    return null;
  }
  var passwordLength = prompt("How long would you like your password to be? \n Password must be at least 8 characters and no more than 128.")

  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("Practice makes perfect -- let's try again. \n Please enter in a number of at least 8 and no more than 128.");
  }

  console.log(uppercase)
  console.log(lowercase)
  console.log(numbers)
  console.log(spchar)
  console.log(passwordLength)

  if (uppercase) {
   allset=allset.concat(uppset)
    console.log(allset)
  }
  if (lowercase) {
   allset=allset.concat(lowset)
    console.log(allset)
  }
  if (numbers) {
   allset=allset.concat(numset)
    console.log(allset)
  }
  if (spchar) {
    allset=allset.concat(spset)
    console.log(allset)
  }

  for (let i=0; i < passwordLength; i++) {
    password += allset[Math.floor(Math.random() * allset.length)];
    console.log(typeof password)  
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