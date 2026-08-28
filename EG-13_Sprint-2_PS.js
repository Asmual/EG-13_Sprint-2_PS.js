/********** 1. Reverse a String *********/
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// console.log(reverseString("hello")); 
// Expected Output: "olleh"

/********** 2. Find Maximum *********/
function findMax(nums) {
let max = nums[0];
for (let i = 1; i < nums.length; i++) {
if (nums[i] > max) {
max = nums[i];
}
}
return max;
}

// console.log(findMax([3, 7, 2, 9, 5]));
// Expected Output: 9