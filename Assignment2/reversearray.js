var nums = [1, 2, 3, 4];
var reverseArray = [];

function reverseArrayFunction(nums) {
  for (var i = nums.length; i > 0; i--) {
    console.log(i);
    reverseArray.push(i);
  }
  return reverseArray;
}

var output = reverseArrayFunction(nums);
console.log(output);