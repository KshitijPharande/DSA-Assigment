function isPalindrome(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--){
      rev += str[i];
  }
  if (rev == str) {
      return true;
  } else {
      return false;
  }
}

const string1 = isPalindrome("naman");
console.log(string1);
const string2 = isPalindrome("mayur");
console.log(string2);