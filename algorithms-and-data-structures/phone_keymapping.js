function minKeyPresses(word) {
    // Step 1: Count the frequency of each character
    const frequencyMap = new Map();
    for (let char of word) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
        // console.log('FREQUENCY', frequencyMap.get(char) || 0)
    }

    // console.log(frequencyMap);

    // Step 2: Sort characters by frequency in descending order
    const sortedChars = Array.from(frequencyMap.entries()).sort((a, b) => b[1] - a[1]);

    // console.log(Array.from(frequencyMap.entries()));

    // const output = [11, 2, 22, 1].sort((a, b) => a - b)
    // console.log(output)

    // Step 3: Map characters to keypad keys
    let totalKeyPresses = 0;
    const keys = 8; // keys 2 to 9, so 8 keys
    sortedChars.forEach(([char, freq], index) => {
        const keyPosition = Math.floor(index / keys) + 1;
        totalKeyPresses += freq * keyPosition;
    });

    return totalKeyPresses;
}

// const toSort = [2, 5, 8, 9]
// let blocker = 1

// for (let index = 0; index <= toSort.length && blocker != 0; index++) {
//     if (index + 1 < toSort.length && index < index + 1) {
//         let gettingTheOldValue = toSort[index]
//         toSort.splice(index, 1, toSort[index + 1])
//         toSort.splice(index + 1, 1)
//         toSort.splice(index + 1, 0, gettingTheOldValue)
//         blocker += 1
//         // continue
//     }
//     else {
//         blocker = 0
//     }
// }
// console.log(toSort);

// const toSort = [2, 5, 8, 9];
// let n = toSort.length;
// let swapped;

// do {
//     swapped = false;
//     for (let i = 0; i < n - 1; i++) {
//         if (toSort[i] < toSort[i + 1]) {
//             // Swap the elements
//             let temp = toSort[i];
//             toSort[i] = toSort[i + 1];
//             toSort[i + 1] = temp;
//             swapped = true;
//         }
//     }
//     n--; // Reduce the length since the largest element is now in its correct position
// } while (swapped);

// console.log(toSort);


// var twoSum = function (nums, target) {
//     // var sortedNumbers = []

//     // nums.forEach(element => {
//     //     if (!(element > target)) {
//     //         console.log('pushing out', element)
//     //         sortedNumbers.push(element)
//     //     }
//     // })

//     let indexes = [];

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if ((nums[i] + nums[j]) == target && i != j) {
//                 indexes.push(i, j);
//                 return indexes
//             }
//         }
//     }
// };


// var twoSum = function (nums, target) {
//     const pairIdx = {};

//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         console.log(target - num)
//         if (target - num in pairIdx) {
//             console.log('=-=-=-=')
//             console.log(pairIdx)
//             return [i, pairIdx[target - num]];
//         }
//         pairIdx[num] = i;
//     }
// };

// var twoSum = function (nums, target) {
//     const pairMap = {}

//     for (let i = 0; i < nums.length; i++) {
//         const num = target - nums[i]

//         console.log('(TARGET - NUM)', num)

//         if (target - num in pairMap) {
//             console.log('TARGET - (TARGET - NUM)', target - num);

//             console.log('PAIR MAP', pairMap);
//             return [i, pairMap[target - num]]
//         }

//         // console.log('TARGET - (TARGET - NUM)', target - num);

//         pairMap[num] = i
//     }


// };
// const a = twoSum([2, 3, 4], 6)//[3, 2, 1, 9, 2, 16, 22, 4], 6)//[3, 2, 4], 6)//[2, 7, 11, 15], 9)
// console.log(a)


// Example Usage
// console.log(minKeyPresses("abcde"));           // Output: 5
// console.log(minKeyPresses("xyzxyzxyzxyz"));    // Output: 12
// console.log(minKeyPresses("aabbccddeeffgghhiiiiii"));  // Output: 24


// const dummyArray = ['element 1', 'element 2', 'element 3']
// console.log(dummyArray);
// const returnedDummyArray = dummyArray.splice(0);
// console.log(dummyArray);
// console.log(returnedDummyArray);

// const start = 5
// dummyArray length = 3 if - applied then -3
// <= start 
// -3 <= -2 < 0
// console.log(-dummyArray.length <= start < 0)

// -1 + -3
// console.log(start + dummyArray.length)

// start < -array.length


var isPalindrome = function (x) {
    console.log();
};

isPalindrome(123);


//     // Getting the user input
//     int num = input.nextInt();

//     // Initialize variables
//     int reverseNum = 0;
//     int temp = num;

//     // Reverse the digits of the number
//     while (temp != 0) {
//         int digit = temp % 10;
//         reverseNum = reverseNum * 10 + digit;
//         temp = temp / 10;
//     }

//     // Check if the original number is equal to the reversed number
//     if (num == reverseNum) {
//         System.out.println(" Yes, "+ num +" is a palindrome number");
//     } else {
//         System.out.println(" No, "+ num +" is not a palindrome number.");
//     }
// }
// }