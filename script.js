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
  if (lengthOfPassword < 8 || lengthOfPassword > 128) 
  {alert("your password should have at least 8 characters but no more than 128")
  prompt("How many characters would you like in your password?")}
else {var lowerCasedCharacters = confirm("Click ok if you would like lowercase characters in your password, otherwise click cancel.")
    var upperCasedCharacters = confirm("Click ok if you would like uppercase characters in your password, otherwise click cancel.") 
    var numericCharacters = confirm("Click ok if you would like numbers in your password, otherwise click cancel.") 
    var specialCharacters = confirm("Click ok if you would like special characters in your password, otherwise click cancel.") }
//}


// Function for getting a random element from an array
var characterTypes = []
function getRandom(characterTypes) {
  characterTypes = specialCharacters.concat (numericCharacters, lowerCasedCharacters, upperCasedCharacters)
  return characterTypes [Math.floor(Math.random()*characterTypes.length)]
}

// Function to generate password with user input
function generatePassword() {
  for (let j=0; j< characterTypes.length; j++)
  var password = characterTypes[i]
return password
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