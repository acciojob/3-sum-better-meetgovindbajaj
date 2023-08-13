function threeSum(nums, target) {
  nums.sort((a, b) => a - b);
  console.log("nums=", nums, " target=", target);
  let closestSum = Infinity;
  console.log("closestSum=", closestSum);
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1;
    console.log("left=", left, " right=", right);
    while (left < right) {
      let currSum = nums[i] + nums[left] + nums[right];
      console.log("\tcurrSum=", currSum);
      if (Math.abs(currSum - target) < Math.abs(closestSum - target))
        closestSum = currSum;
      console.log("\tclosestSum=", closestSum, "\n");
      if (currSum < target) left++;
      else right--;
    }
    console.log("");
  }

  return closestSum;
}

module.exports = threeSum;
