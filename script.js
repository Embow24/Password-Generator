// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//converted the arrays to strings to remove the commas
var specialCharactersString = specialCharacters.join("")
var numericCharactersString = numericCharacters.join("")
var lowerCasedCharactersString = lowerCasedCharacters.join("")
var upperCasedCharactersString = upperCasedCharacters.join("")

//variables for confirm statements
var lengthOfPassword;
  var optionLowercase;
  var optionUppercase;
  var optionNumeric;
  var optionSpecialCharacter;

// Function to prompt user for password options
function getPasswordOptions() {
  lengthOfPassword = prompt("How many characters would you like in your password?") 

  if (lengthOfPassword < 8 || lengthOfPassword > 128) 
  {alert("your password should have at least 8 characters but no more than 128")
  prompt("How many characters would you like in your password?")
}

  optionLowercase = confirm("Click ok if you would like lowercase characters in your password, otherwise click cancel.")
  optionUppercase = confirm("Click ok if you would like uppercase characters in your password, otherwise click cancel.") 
  optionNumeric = confirm("Click ok if you would like numbers in your password, otherwise click cancel.") 
  optionSpecialCharacter = confirm("Click ok if you would like special characters in your password, otherwise click cancel.")

  if (optionLowercase != true && optionUppercase !=true && optionNumeric != true && optionSpecialCharacter != true)
{alert("Please select at least one character type")
optionLowercase = confirm("Click ok if you would like lowercase characters in your password, otherwise click cancel.")
optionUppercase = confirm("Click ok if you would like uppercase characters in your password, otherwise click cancel.")
optionNumeric = confirm("Click ok if you would like numbers in your password, otherwise click cancel.")
optionSpecialCharacter = confirm("Click ok if you would like special characters in your password, otherwise click cancel.")
  } 
  return lengthOfPassword 
}

// Function for getting a random element from an array
var characterTypes = []
var randomPassword;
var userPassword = ""

function getRandom() {

  if(optionLowercase == true) {characterTypes += lowerCasedCharactersString}
  if(optionUppercase == true) {characterTypes += upperCasedCharactersString}
  if(optionNumeric == true) {characterTypes += numericCharactersString}
  if(optionSpecialCharacter == true) {characterTypes += specialCharactersString}

for (let i=0; i<lengthOfPassword; i++) {
randomPassword = [Math.floor(Math.random()*characterTypes.length)]
userPassword = userPassword + characterTypes[randomPassword]
  }
  return userPassword
}

// Function to generate password with user input
var finalPassword = ""
function generatePassword() {
  finalPassword += getPasswordOptions() && getRandom()
return finalPassword
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

