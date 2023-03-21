// Declare array
var numberArray = [3, 2, 1, 3, 4, 6, 5, 5, 4, 6];

// Sort array in descending order
var numberArraySorted = numberArray.sort(function(a, b)	{
return b - a
});

// Print sorted array
console.log("array sorted in descending order");
console.log(numberArraySorted);

// Filter array by removing any duplicate entries
var filteredArray = numberArraySorted.filter((item, index) => numberArraySorted.indexOf(item) === index);

// Print filtered array
console.log("array sorted in descending order and duplicates removed from array");
console.log(filteredArray);