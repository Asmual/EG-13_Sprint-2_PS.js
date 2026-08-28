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

/********** 5. Count Vowels **********/
function countVowels(str) {
let count = 0;
const vowels = "aeiouAEIOU";
for (let i = 0; i < str.length; i++) {
if (vowels.includes(str[i])) {
count++;
}
}
return count;
}

// console.log(countVowels("javascript"));
// Expected Output: 3

/********** 6. Two Sum **********/
function twoSum(nums, target) {
for (let i = 0; i < nums.length; i++) {
for (let j = i + 1; j < nums.length; j++) {
if (nums[i] + nums[j] === target) {
return [i, j];
}
}
}
return [];
}

// console.log(twoSum([2, 7, 11, 15], 9));
// Expected Output: [0, 1]


/********** 7. Flatten a Nested Array **********/
function flattenArray(arr) {
let result = [];
for (let i = 0; i < arr.length; i++) {
if (Array.isArray(arr[i])) {
result = result.concat(flattenArray(arr[i]));
} else {
result.push(arr[i]);
}
}
return result;
}

// console.log(flattenArray([1, [2, [3, 4], 5]]));
// Expected Output: [1, 2, 3, 4, 5]

/********** 8. Group Anagrams **********/
function groupAnagrams(strs) {
const map = {};
for (let i = 0; i < strs.length; i++) {
const sorted = strs[i].split('').sort().join('');
if (!map[sorted]) {
map[sorted] = [];
}
map[sorted].push(strs[i]);
}
return Object.values(map);
}

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Expected Output: [["eat","tea","ate"],["tan","nat"],["bat"]]