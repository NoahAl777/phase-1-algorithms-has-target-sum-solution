function hasTargetSum(array, target) {
  // Write your algorithm here
  for (firstNumber = 0; firstNumber < array.length - 1; firstNumber++) {
    for (secondNumber = firstNumber + 1; secondNumber < array.length; secondNumber++)
      if (array[firstNumber] + array[secondNumber] === target) return true
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n**) - quadratic
*/

/* 
  Add your pseudocode here
  need nested for loop
    1st level :
      iterate through the array
    2nd level :
      sum the current element of the array with every other element individually
      if sum is equal to target exit array
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
