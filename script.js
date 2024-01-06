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


// Function to prompt user for password options
//function getPasswordOptions() {
  var lengthOfPassword = prompt("How many characters would you like in your password?") 
do {alert("your password should have at least 8 characters but no more than 128")
lengthOfPassword = prompt ("How many characters would you like in your password?")}
while (lengthOfPassword < 8 || lengthOfPassword > 128) 


    var lowerCasedCharacters = confirm("Click ok if you would like lowercase characters in your password, otherwise click cancel.")
    var upperCasedCharacters = confirm("Click ok if you would like uppercase characters in your password, otherwise click cancel.") 
    var numericCharacters = confirm("Click ok if you would like numbers in your password, otherwise click cancel.") 
    var specialCharacters = confirm("Click ok if you would like special characters in your password, otherwise click cancel.") 

//}


// Function for getting a random element from an array
var characterTypes = ""
characterTypes.concat (specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters)
function getRandom(characterTypes) {
  return characterTypes [Math.floor(Math.random()*characterTypes.length)]
}

// function getRandom(specialCharacters) {
// return specialCharacters [Math.floor(Math.random()*specialCharacters.length)]
// }

// function getRandom(numericCharacters) {
//   return numericCharacters [Math.floor(Math.random()*numericCharacters.length)]
// }

// function getRandom(lowerCasedCharacters) {
//   return lowerCasedCharacters [Math.floor(Math.random()*lowerCasedCharacters.length)]
// }

// function getRandom(upperCasedCharacters) {
//   return upperCasedCharacters [Math.floor(Math.random()*upperCasedCharacters.length)]
// }

// Function to generate password with user input
function generatePassword() {}


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