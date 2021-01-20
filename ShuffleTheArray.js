// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]

// Input: nums = [1,1,2,2], n = 2
// Output: [1,2,1,2]

const shuffle = (nums, n) => {
    const leftArray = nums.splice(0, n)
    const rightArray = nums

    rightArray.map((v, i) => leftArray.splice(i * 2 + 1, 0, v))

    return leftArray
}

const nums = [2,5,1,3,4,7], n = 3
console.log(shuffle(nums, n))