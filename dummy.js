// const fibonacci = [0, 1]

// function fibonacci_function(n) {
//     var index = 2
//     fibonacci.push(fibonacci[0] + fibonacci[1]);

//     while (fibonacci.length != n) {
//         fibonacci.push((fibonacci[index]) + (fibonacci[index - 1]));
//         index++;
//     }
//     return fibonacci;
// }

// const output = fibonacci_function(7);
// console.log(output);

// BIG O OF MY CODE
// O(N 2) + 3

// function powerof2(n) {
//     answer = n / 2

//     console.log(Number.isInteger(answer));
//     return Number.isInteger(answer);
// }

// powerof2(4);
// powerof2(5);
// powerof2(16);

// BITWISE AND SOLUTION TO POWER OF TWO
// if (n < 1)
//     return false

// return (n & (n - 1)) === 0


function Fibonacci(n) {
    // Base case
    if (n == 0) {
        return 0;  // Fib(0) = 0
    } else if (n == 1) {
        return 1;  // Fib(1) = 1
    } else {
        // Recursive case: Fib(n) = Fib(n-1) + Fib(n-2)
        console.log(n - 1, n - 2);
        // console.log(Fibonacci(n - 1), Fibonacci(n - 2));
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}

// console.log(Fibonacci(5));

// RECURSIVE FIBONACCI SEQUENCE
function recursionBase(n) {
    var fibonacci = [0, 1];

    for (let index = 0; index < array.length; index++) {
        recursionAction(n)
    }

    function recursionAction(n) {
        fibonacci.push(fibonacci[index] + fibonacci[index + 1]);
    }
}

function recursionFactorial(n) {
    if (n === 0) {
        return 1;
    }

    // else if (n == 1) {
    //     return 1;

    // }

    // else {
    return n * recursionFactorial(n - 1)
    // }
}

// console.log(recursionFactorial(4));
//array.length - Math.round((array.length / (4 + iteration)) - 1);
//array.length - Math.floor((array.length / (4 + iteration)) - 1);



// SEARCH ALGORITHMS
// LINEAR SEARCH, BINARY SEARCH, BINARY RECURSIVE SEARCH
// LINEAR USED ON UNSORTED ARRAYS
// BINARY USED ONLY IN SORTED ARRAYS  

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const zhanelya = (array.length - 1) - Math.floor((array.length / (4 + 0)))
// console.log(Math.floor(((array.length - 1) / (4 + 5))));

// console.log(array.length - 1);
// console.log(array.length / 4);

// console.log(zhanelya);
// console.log(partitionIndex = (array.length - 1) - Math.round(((array.length) / (4 + 0))));
// console.log(partitionIndex = (array.length - 1) - Math.round(((array.length) / (4 + 2))))

// console.log(binarySearch(3, -1, 0));

//Math.floor(((array.length) / (4 + iteration)));

// if (partitionIndex == searchIndex) {
//     partitionIndex = 0;
// }


// if (partitionIndex % 2 == 1) {
// }
// else {
// partitionIndex = (array.length - 1) - Math.round(((array.length) / (4 + iteration)));
// return binarySearch(n, partitionIndex, iteration);
// }


// const sortedArray = [3, 13, 27, 33, 34, 36, 54, 57, 66, 66, 67, 69, 80, 84, 93, 94, 95];


// console.log(binarySearch())
//                            4        6       8   9
const array = [3, 13, 27, 33, 34, 36, 54, 57, 66, 66, 67, 69, 80, 84, 93, 94];

// console.log(binarySearch(54, -1, 0));

// iteration += 1;

// return binarySearch(n, partitionIndex, iteration);
// console.log(array.length);
// console.log(Math.round((array.length / (4 - 2))))

// var partitionIndex = arrayIndexedLength - Math.round((arrayIndexedLength / (4 + iteration)))

// iteration += 1;
//&& n < array[middleIndex]
// return binarySearch(n, partitionIndex, iteration);

// array.forEach((element) => {
//     console.log(`Searching for ${element}:`, binarySearch(element, -1, 0));
// });

// var partitionIndex = Math.round(array.length / 7);
// // console.log(partitionIndex)


// // console.log(binarySearch(57, 0))


// function binarySearch(n, searchIndex) {
//     const arrayIndexedLength = array.length - 1;

//     var middleIndex = Math.round(arrayIndexedLength / 2);

//     if (array.length === 0) {
//         return -1;
//     }

//     if (searchIndex === -1) {
//         searchIndex = middleIndex;
//     }

//     if (array[searchIndex] === n) {
//         return array[searchIndex];
//     }

//     if (array[searchIndex] < n) {
//         var partitionIndex = Math.round((arrayIndexedLength / 4));

//         if (partitionIndex % 2 == 1) {
//             return binarySearch(n, partitionIndex);
//         }
//         else {
//             return binarySearch(n, searchIndex + 1);
//         }
//     }

//     if (array[searchIndex] > n) {
//         var partitionIndex = Math.round((arrayIndexedLength / 4));

//         if (partitionIndex % 2 == 1) {
//             return binarySearch(n, partitionIndex);
//         }
//         else {
//             return binarySearch(n, searchIndex - 1);
//         }
//     }
// }

function binarySearch(array, n, low, high) {
    if (low > high) {
        return -1; // Element not found
    }

    const middleIndex = Math.floor((low + high) / 2);

    if (array[middleIndex] === n) {
        return middleIndex; // Return the index of the found element
    } else if (array[middleIndex] < n) {
        return binarySearch(array, n, middleIndex + 1, high); // Search the right half
    } else {
        return binarySearch(array, n, low, middleIndex - 1); // Search the left half
    }
}

// // Example sorted array:
// const sortedArray = [3, 13, 27, 33, 34, 36, 54, 57, 66, 66, 67, 69, 80, 84, 93, 94, 95, 110, 123, 133, 140, 141];

// // Example of calling binary search on each element:
// sortedArray.forEach((element) => {
//     console.log(`Searching for ${element}:`, binarySearch(sortedArray, element, 0, sortedArray.length - 1));
// });

// // Example of searching for an element not in the array:
// console.log(`Searching for 100 (not in array):`, binarySearch(sortedArray, 66, 0, sortedArray.length - 1));



// const takenValue = bubbleSortArray.splice(0 + 1, 1);
// bubbleSortArray[0] = takenValue[0];

// console.log(bubbleSortArray.splice(1 + 1, 1));

// var bubbleSortArray = [-2, 20, 6, -8, 4]
// function bubbleSort() {
//     var swapped = false;
//     var index = 0;
//     var arrLength = bubbleSortArray.length - 1;

//     do {
//         swapped = false;

//         for (let i = 0; i < bubbleSortArray.length; i++) {

//             if (bubbleSortArray[i] > bubbleSortArray[i + 1]) {
//                 let temp = bubbleSortArray[i];
//                 bubbleSortArray[i] = bubbleSortArray[i + 1];
//                 bubbleSortArray[i + 1] = temp;
//                 swapped = true;
//             }


//         }
//     } while (swapped)
// }

// bubbleSort()
// console.log(bubbleSortArray)

// const bubbleSort = arr => {
//     let swapped;
//     let j = 0;
//     do {
//         swapped = false;
//         for (let i = 0; i < arr.length - j - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         } j++;
//     } while (swapped)
//     return arr;
// }

// console.log(bubbleSort([8, 20, -2, 4, -6]))


// if (sortedArray.length === 0) {
//     sortedArray.push(unsortedArray[0])
// }

// for (let index = 0; index < unsortedArray.length; index++) {
//     if (unsortedArray[index] > unsortedArray[index + 1]) {
//         let temp = unsortedArray[index];

//         let value = unsortedArray[index + 1];

//         sortedArray.push(unsortedArray[index + 1]);

//         unsortedArray.splice(unsortedArray[index], 1);

//         unsortedArray[index + 1] = temp;

//         for (let jindex = sortedArray.length; jindex <= 0; jindex--) {
//             if (sortedArray[jindex] > value) {
//                 let temp = sortedArray[jindex];

//                 sortedArray.splice(sortedArray[jindex], 1);

//                 sortedArray[jindex + 1] = temp;
//             }
//         }
//     }
// }
// if (unsortedArray.length === sortedArray.length) {
//     condition = false;
//     break;
// }

// for (let index = 0; index < unsortedArray.length; index++) {
//     if (unsortedArray[index] > unsortedArray[index + 1]) {
//         sortedArray.push(unsortedArray[index]);

//         for (let index = 0; index < sortedArray.length; index++) {
//             let NTI;
//             let SE;

//             NTI = unsortedArray[index + 1];
//             SE = unsortedArray[index];

//             unsortedArray[index + 1] = SE;
//         }
//     }

// }
// YOURE JUST DUMB
// MY DUMB IMPLEMENTATION
var unsortedArray = [-6, 20, 8, -2, 4]
// unsortedArray.splice(0, 0, 123)
let NTI = unsortedArray.splice(0 + 1, 1);
unsortedArray.splice(0, 0, NTI[0]);
console.log(unsortedArray);

var sortedArray = []
var sortedIndexLength = 1

const insertionSort = () => {
    let condition = true;

    do {
        for (let index = 0; index < unsortedArray.length - 1; index++) {
            if (unsortedArray[index] > unsortedArray[index + 1]) {

                for (let j = Math.max(sortedIndexLength, unsortedArray.length - 1); j >= 0; j--) {
                    if (unsortedArray[j] > unsortedArray[j + 1]) {

                        let NTI = unsortedArray.splice(j + 1, 1);
                        unsortedArray.splice(j, 0, NTI[0]);
                    }
                    else {
                        sortedIndexLength += 1;
                    }
                }
            }
            else {
                condition = false;
                sortedIndexLength += 1;
            }
        }

    } while (condition);
}

insertionSort();
// console.log(sortedArray);
console.log(unsortedArray);


// SMART IMPLEMENTATION
var unsortedArray = [-6, 20, 8, -2, 4];

const insertionSortBetter = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        // Compare current element with the sorted portion and shift larger elements
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Shift larger element to the right
            j--;
        }
        arr[j + 1] = current; // Insert the current element in the right position
    }
};

// insertionSort(unsortedArray);
// console.log(unsortedArray);  // Output: [-6, -2, 4, 8, 20]

const quickSort = (array) => {

}

quickSort(unsortedArray);
console.log(unsortedArray);