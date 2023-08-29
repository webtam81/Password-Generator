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
let lowerCaseYN;
let upperCaseYN;
let numbersYN;
let specialCharsYN;

// Function to prompt user for password options
function getPasswordOptions() {
  //Password length
  let validPassLength = false;
  let i = 0;

  while (validPassLength === false && i < 10) {
    passLength = parseInt(prompt(`Please enter password legnth (from 10 to 64 characters)`));
    if (isNaN(passLength) || passLength < 10 || passLength > 64) {
      alert(`Not a valid password length, please try again.`);
    }
    else {
      validPassLength = true;
    }
    i++
  }

  let chosenOptions = 0;
  let n = 0;
  while (chosenOptions < 1 && n < 10) {

    //Option to include lowercase letters
    let j = 0;
    lowerCaseYN = '';

    while (lowerCaseYN !== 'y' && lowerCaseYN !== 'n' && j < 10) {
      lowerCaseYN = prompt(`Do you want lowercase letters in your password?\nType 'Y' for 'Yes' or 'N' for 'No'.`);
      if (lowerCaseYN.toLowerCase() == 'y' || lowerCaseYN.toLowerCase() == 'yes') {
        lowerCaseYN = 'y';
        chosenOptions++;
      } else if (lowerCaseYN.toLowerCase() == 'n' ||  lowerCaseYN.toLowerCase() == 'no') {
        lowerCaseYN = 'n';
      } else {
        alert(`You have entered an incorrect value. Please enter 'Y' or 'N' only.`);
      }
      console.log(`j: ${j}`); //TODO rm
      j++
    }

      //Option to include uppercase letters
      let k = 0;
      upperCaseYN = '';

      while (upperCaseYN !== 'y' && upperCaseYN !== 'n' && k < 10) {
        upperCaseYN = prompt(`Do you want uppercase letters in your password?\nType 'Y' for 'Yes' or 'N' for 'No'.`);
        if (upperCaseYN.toLowerCase() == 'y' || upperCaseYN.toLowerCase() == 'yes') {
          upperCaseYN = 'y';
          chosenOptions++;
        } else if (upperCaseYN.toLowerCase() == 'n' ||  upperCaseYN.toLowerCase() == 'no') {
          upperCaseYN = 'n';
        } else {
          alert(`You have entered an incorrect value. Please enter 'Y' or 'N' only.`);
        }
        console.log(`k: ${k}`); //TODO rm
        k++;
      }

      //Option to include numbers
      let l = 0;
      numbersYN = '';

      while (numbersYN !== 'y' && numbersYN !== 'n' && l < 10) {
        numbersYN = prompt(`Do you want numbers in your password?\nType 'Y' for 'Yes' or 'N' for 'No'.`);
        if (numbersYN.toLowerCase() == 'y' || numbersYN.toLowerCase() == 'yes') {
          numbersYN = 'y';
          chosenOptions++;
        } else if (numbersYN.toLowerCase() == 'n' ||  numbersYN.toLowerCase() == 'no') {
          numbersYN = 'n';
        } else {
          alert(`You have entered an incorrect value. Please enter 'Y' or 'N' only.`);
        }
        console.log(`l: ${l}`); //TODO rm
        l++;
      }    

      //Option to include special characters
      let m = 0;
      specialCharsYN = '';

      while (specialCharsYN !== 'y' && specialCharsYN !== 'n' && m < 10) {
        specialCharsYN = prompt(`Do you want special characters (symbols) in your password?\nType 'Y' for 'Yes' or 'N' for 'No'.`);
        if (specialCharsYN.toLowerCase() == 'y' || specialCharsYN.toLowerCase() == 'yes') {
          specialCharsYN = 'y';
          chosenOptions++
        } else if (specialCharsYN.toLowerCase() == 'n' ||  specialCharsYN.toLowerCase() == 'no') {
          specialCharsYN = 'n';
        } else {
          alert(`You have entered an incorrect value. Please enter 'Y' or 'N' only.`);
        }
        console.log(`m: ${m}`); //TODO rm
        m++;
      } 

      if (chosenOptions == 0) {
        alert(`You must select at least one character type. Please try again.`); 
      }

      console.log(`n: ${n}`); //TODO rm
    n++;
    
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  //return 'password'; //TODO rm
  //merge arrays
  //set var to char lenth
  //for var,  generate random char, add to string.
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

console.log(`Password Length: ${passLength}`); //TODO rm
console.log(`Lower case letters: ${lowerCaseYN}`); //TODO rm
console.log(`Upper case letters: ${upperCaseYN}`); //TODO rm
console.log(`Numbers: ${numbersYN}`); //TODO rm
console.log(`Special characters: ${specialCharsYN}`); //TODO rm


console.log(getRandom(upperCasedCharacters));
//let randomElement = upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
//console.log(randomElement);