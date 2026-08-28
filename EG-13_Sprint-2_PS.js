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


/********** 3. Check for Palindrome **********/
function isPalindrome(str) {
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
reversed += str[i];
}
return str === reversed;
}

// console.log(isPalindrome("racecar"));
// Expected Output: true


/********** 4. Sum Array Elements **********/
function sumArray(nums) {
let sum = 0;
for (let i = 0; i < nums.length; i++) {
sum += nums[i];
}
return sum;
}

// console.log(sumArray([10, 20, 30, 40]));
// Expected Output: 100