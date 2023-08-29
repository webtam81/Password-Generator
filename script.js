// Array of special characters to be included in password
const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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

//variables for use across functions
let passLength = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  let validPassLength = false;

  while (validPassLength === false) {
    passLength = parseInt(prompt(`Please enter password legnth (from 10 to 64 characters)`));
    if (isNaN(passLength) || passLength < 10 || passLength > 64) {
      console.log(`Not a valid password length, please try again.`); //TODO change to alert
    }
    else {
      validPassLength = true;
    }
    console.log(`${passLength}`); //TODO rm
  }


    
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

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

//testing
//TODO - array of valid YN answers

getPasswordOptions();

console.log(passLength); //rm

let lowerCaseYN = prompt(`Do you want lowercase letters in your password?\nType 'Y' for 'Yes' or 'N' for 'No'.`);

if (lowerCaseYN.toLowerCase() !== "y" || lowerCaseYN.toLowerCase() !== "yes" || lowerCaseYN.toLowerCase() !== "n" ||  lowerCaseYN.toLowerCase() !== "n") {
  console.log(`Please select 'Y' or 'N'`);
} else {
  lowerCaseYN = true;
}

console.log(lowerCaseYN);