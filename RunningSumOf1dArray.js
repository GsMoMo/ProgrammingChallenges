const runningSum = (nums) => {
  let outputArr = [nums[0]]

  for (let i = 1; i < nums.length; i++) {
    outputArr.push(outputArr[i - 1] + nums[i])
  }

  return outputArr
}

const nums = [1,2,3,4]
console.log(runningSum(nums))