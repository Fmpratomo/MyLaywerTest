// Example
const str1 = 'abcba';
const str2 = 'madam';
const str3 = 'Abcba';
const str4 = 'Abc';

const cekPalindrome = (str) => {
  let isPalindrome;
  let string = str
      .replace(/[^\w]/gi, "") //Replace Spesial Karakter menjadi ""
  isPalindrome = string == string.split('').reverse().join('');
  console.log(isPalindrome)
  return isPalindrome;
}

// TEST
cekPalindrome(str1); // true
cekPalindrome(str2); // true
cekPalindrome(str3); // true
cekPalindrome(str4); // true

